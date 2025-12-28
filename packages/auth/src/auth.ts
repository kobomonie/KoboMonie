//@ts-nocheck
import { db, schema } from '@kobomonie/db';
import { env } from '@kobomonie/env';
import { emailTemplates, sendEmail, sendSMS } from '@kobomonie/notifications';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import {
  bearer,
  emailOTP,
  openAPI,
  organization,
  phoneNumber,
  twoFactor,
} from 'better-auth/plugins';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: schema,
  }),
  rateLimit: {
    storage: 'database',
  },
  emailAndPassword: {
    enabled: true,
    async sendResetPassword({ user, url }) {
      const { html, subject } = await emailTemplates.resetPassword({ url });
      await sendEmail({
        to: user.email,
        subject,
        html,
      });
    },
  },
  emailVerification: {
    async sendVerificationEmail({ user, url, token }) {
      const { html, subject } = await emailTemplates.verification({
        url,
        token,
      });
      await sendEmail({
        to: user.email,
        subject,
        html,
      });
    },
  },
  trustedOrigins: [env.CORS_ORIGIN],
  plugins: [
    openAPI(),
    organization({
      async sendInvitationEmail(data) {
        const { html, subject } = await emailTemplates.invitation({
          url: `http://localhost:5173/accept-invitation/${data.id}`, // TODO: Use env var for base URL
          inviterName: data.inviter.user.name,
          organizationName: data.organization.name,
        });
        await sendEmail({
          to: data.email,
          subject,
          html,
        });
      },
    }),
    bearer(),
    twoFactor({
      issuer: 'Kobomonie',
    }),
    phoneNumber({
      sendOTP: async ({ phoneNumber, code }) => {
        await sendSMS({ to: phoneNumber, props: { otp: code } }, 'otp');
      },
    }),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // Using simple text for OTP for now, or could create a template
        await sendEmail({
          to: email,
          subject: `Your OTP for ${type}`,
          text: `Your OTP is ${otp}`,
        });
      },
    }),
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    },
    apple: {
      clientId: process.env.APPLE_CLIENT_ID || '',
      clientSecret: process.env.APPLE_CLIENT_SECRET || '',
    },
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID || '',
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET || '',
    },
  },
  user: {
    changeEmail: {
      enabled: true,
      async sendChangeEmailConfirmation({ user, newEmail, url }) {
        const { html, subject } = await emailTemplates.emailChange({
          url,
          newEmail,
        });
        await sendEmail({
          to: user.email,
          subject,
          html,
        });
      },
    },
    deleteUser: {
      enabled: true,
      async sendDeleteAccountVerification({ user, url }) {
        const { html, subject } = await emailTemplates.deleteAccount({ url });
        await sendEmail({
          to: user.email,
          subject,
          html,
        });
      },
    },
    additionalFields: {
      phoneNumber: {
        type: 'string',
        required: false,
      },
      phoneNumberVerified: {
        type: 'boolean',
        required: false,
        defaultValue: false,
      },
      securityQuestion: {
        type: 'string',
        required: false,
      },
      securityAnswer: {
        type: 'string', // Should be hashed in practice
        required: false,
      },
      kycStatus: {
        type: 'string',
        required: false,
        defaultValue: 'pending',
      },
    },
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
});
