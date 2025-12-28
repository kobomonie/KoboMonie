import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Text,
} from "@react-email/components";
import * as React from "react";

interface DeleteAccountEmailProps {
	url: string;
}

export const DeleteAccountEmail = ({ url }: DeleteAccountEmailProps) => (
	<Html>
		<Head />
		<Preview>Confirm account deletion</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Delete Account</Heading>
				<Text style={text}>
					Please confirm that you want to delete your account. This action
					cannot be undone.
				</Text>
				<Link href={url} style={link}>
					Delete Account
				</Link>
			</Container>
		</Body>
	</Html>
);

export default DeleteAccountEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const h1 = {
	color: "#333",
	fontSize: "24px",
	fontWeight: "bold",
	paddingTop: "32px",
	paddingBottom: "32px",
};

const text = {
	color: "#333",
	fontSize: "16px",
	lineHeight: "26px",
};

const link = {
	backgroundColor: "#d32f2f",
	borderRadius: "5px",
	color: "#fff",
	fontSize: "16px",
	fontWeight: "bold",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	width: "100%",
	padding: "10px",
};
