import { env } from "@kobomonie/env";

export const customFormUrlEncoded = <Body>(body: Body): URLSearchParams => {
	const formData = new URLSearchParams();

	// @ts-expect-error
	Object.entries(body).forEach(([key, value]) => {
		formData.append(key, value as string);
	});

	return formData;
};

// NOTE: Supports cases where `content-type` is other than `json`
const getBody = <T>(c: Response | Request): Promise<T> => {
	const contentType = c.headers.get("content-type");

	if (contentType && contentType.includes("application/json")) {
		return c.json();
	}

	if (contentType && contentType.includes("application/pdf")) {
		return c.blob() as Promise<T>;
	}

	return c.text() as Promise<T>;
};

// NOTE: Update just base url
const getUrl = (contextUrl: string): string => {
	const url = new URL(contextUrl);
	const pathname = url.pathname;
	const search = url.search;
	const baseUrl = env.VITE_SERVER_URL;

	const requestUrl = new URL(`${baseUrl}${pathname}${search}`);

	return requestUrl.toString();
};

// NOTE: Add headers
const getHeaders = (headers?: HeadersInit): HeadersInit => {
	return {
		...headers,
		// Authorization: 'token', // Auth is handled via cookies
		// 'Content-Type': 'multipart/form-data', // Let fetch handle this for FormData
	};
};

export const customFetch = async <T>(
	url: string,
	options: RequestInit,
): Promise<T> => {
	const requestUrl = getUrl(url);
	const requestHeaders = getHeaders(options.headers);

	const requestInit: RequestInit = {
		...options,
		headers: requestHeaders,
		credentials: "include", // Important for cookies
	};

	const request = new Request(requestUrl, requestInit);
	const response = await fetch(request);
	const data = await getBody<T>(response);

	return { status: response.status, data } as T;
};
