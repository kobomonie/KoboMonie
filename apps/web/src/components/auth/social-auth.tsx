import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Apple, Google, Microsoft } from "@/components/icons";

export default function SocialAuth() {
	const handleSignIn = async (provider: "google" | "microsoft" | "apple") => {
		await authClient.signIn.social(
			{
				provider,
				callbackURL: "/dashboard",
			},
			{
				onError: (ctx) => {
					toast.error(ctx.error.message || "Failed to sign in");
				},
			},
		);
	};

	return (
		<div className="grid grid-cols-1 gap-2">
			<Button
				variant="outline"
				className="w-full gap-2"
				onClick={() => handleSignIn("google")}
				type="button"
			>
				<Google className="h-5 w-5" />
				Continue with Google
			</Button>
			<Button
				variant="outline"
				className="w-full gap-2"
				onClick={() => handleSignIn("microsoft")}
				type="button"
			>
				<Microsoft className="h-5 w-5" />
				Continue with Microsoft
			</Button>
			<Button
				variant="outline"
				className="w-full gap-2"
				onClick={() => handleSignIn("apple")}
				type="button"
			>
				<Apple className="h-5 w-5 fill-current" />
				Continue with Apple
			</Button>
		</div>
	);
}
