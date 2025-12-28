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

interface VerificationEmailProps {
	url: string;
	token?: string;
}

export const VerificationEmail = ({ url, token }: VerificationEmailProps) => (
	<Html>
		<Head />
		<Preview>Verify your email address for Kobomonie</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={h1}>Verify your email</Heading>
				<Text style={text}>
					Click the link below to verify your email address.
				</Text>
				<Link href={url} style={link}>
					Verify Email
				</Link>
				{token && (
					<Text style={text}>
						Or use this code: <strong>{token}</strong>
					</Text>
				)}
			</Container>
		</Body>
	</Html>
);

export default VerificationEmail;

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
	backgroundColor: "#007ee6",
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
