import { type App, cert, getApps, initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";

let firebaseApp: App | undefined;

const getFirebaseApp = () => {
	if (firebaseApp) return firebaseApp;

	const apps = getApps();
	if (apps.length > 0) {
		firebaseApp = apps[0];
		return firebaseApp;
	}

	// Ensure env vars are present
	if (
		!process.env.FIREBASE_PROJECT_ID ||
		!process.env.FIREBASE_CLIENT_EMAIL ||
		!process.env.FIREBASE_PRIVATE_KEY
	) {
		console.warn(
			"[FCM] Firebase credentials missing. Push notifications will fail.",
		);
		// We might want to throw or return null, but for now let's just let it fail if called
	}

	firebaseApp = initializeApp({
		credential: cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
		}),
	});

	return firebaseApp;
};

export const sendPushNotification = async ({
	token,
	title,
	body,
	data,
}: {
	token: string;
	title: string;
	body: string;
	data?: Record<string, string>;
}) => {
	try {
		const app = getFirebaseApp();
		const message = {
			notification: {
				title,
				body,
			},
			data,
			token,
		};

		const response = await getMessaging(app).send(message);
		console.log("[FCM] Successfully sent message:", response);
		return response;
	} catch (error) {
		console.error("[FCM] Error sending message:", error);
		throw error;
	}
};
