import {
	emailOTPClient,
	organizationClient,
	phoneNumberClient,
	twoFactorClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_SERVER_URL,
	plugins: [
		organizationClient(),
		emailOTPClient(),
		twoFactorClient({
			onTwoFactorRedirect() {
				window.location.href = "/2fa";
			},
		}),
		phoneNumberClient(),
	],
});
