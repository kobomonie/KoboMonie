import { render } from "@react-email/render";
import { Resend } from "resend";
import DeleteAccountEmail from "./emails/delete-account";
import EmailChangeEmail from "./emails/email-change";
import InvitationEmail from "./emails/invitation";
import ResetPasswordEmail from "./emails/reset-password";
import VerificationEmail from "./emails/verification";

export * from "./fcm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
	to,
	subject,
	html,
	text,
	from = "Kobomonie <onboarding@resend.dev>", // TODO: Configure verified domain
}: {
	to: string;
	subject: string;
	html?: string;
	text?: string;
	from?: string;
}) => {
	if (!process.env.RESEND_API_KEY) {
		console.warn(
			"[Email] RESEND_API_KEY is missing. Logging email content instead.",
		);
		console.log(`[Email Mock] To: ${to}, Subject: ${subject}`);
		return;
	}

	try {
		const { data, error } = await resend.emails.send({
			from,
			to,
			subject,
			html,
			text,
		} as any);

		if (error) {
			console.error("[Email] Resend API Error:", error);
			throw new Error(error.message);
		}

		console.log(`[Email] Sent email to ${to}:`, data?.id);
		return data;
	} catch (error) {
		console.error(`[Email] Failed to send email to ${to}:`, error);
		throw error;
	}
};

export const smsTemplates = {
	otp: (props: { otp: string }) =>
		`Your Kobomonie verification code is: ${props.otp}. Do not share this code with anyone.`,
	invitation: (props: { inviterName: string; orgName: string; url: string }) =>
		`${props.inviterName} has invited you to join ${props.orgName} on Kobomonie. Join here: ${props.url}`,
};

export type SMSTemplate = keyof typeof smsTemplates;

export const sendSMS = async <T extends SMSTemplate>(
	{ to, props }: { to: string; props: Parameters<(typeof smsTemplates)[T]>[0] },
	template: T,
) => {
	const messageGenerator = smsTemplates[template];
	// @ts-expect-error - Typescript might complain about specific prop types not matching union, but T ensures it.
	const message = messageGenerator(props);

	console.log("[SMS MOCK] ------------------------------------------------");
	console.log(`[SMS MOCK] To: ${to}`);
	console.log(`[SMS MOCK] Template: ${template}`);
	console.log(`[SMS MOCK] Message: ${message}`);
	console.log("[SMS MOCK] ------------------------------------------------");

	return { success: true, to, message };
};

export const emailTemplates = {
	verification: async (
		props: React.ComponentProps<typeof VerificationEmail>,
	) => {
		const html = await render(VerificationEmail(props));
		return { html, subject: "Verify your email" };
	},
	resetPassword: async (
		props: React.ComponentProps<typeof ResetPasswordEmail>,
	) => {
		const html = await render(ResetPasswordEmail(props));
		return { html, subject: "Reset your password" };
	},
	invitation: async (props: React.ComponentProps<typeof InvitationEmail>) => {
		const html = await render(InvitationEmail(props));
		return { html, subject: `Join ${props.organizationName} on Kobomonie` };
	},
	emailChange: async (props: React.ComponentProps<typeof EmailChangeEmail>) => {
		const html = await render(EmailChangeEmail(props));
		return { html, subject: "Confirm email change" };
	},
	deleteAccount: async (
		props: React.ComponentProps<typeof DeleteAccountEmail>,
	) => {
		const html = await render(DeleteAccountEmail(props));
		return { html, subject: "Confirm account deletion" };
	},
};
