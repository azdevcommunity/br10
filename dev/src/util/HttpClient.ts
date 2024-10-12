import {TokenUtil} from "@/util/TokenUtil.ts";

export class HttpClient {
    private static baseUrl: string = import.meta.env.VITE_BR10_API_BASE_URL;

    public static accessToken: string = TokenUtil.getAccessToken();

    private static defaultHeaders = {
        'Authorization': `Bearer ${(this.accessToken)}`,
        'Content-Type': 'application/json',
        "Accepted-Language": "az",
    }

    public static get(path: string, headers: Map<string, any> = null) {
        const customHeaders = headers ? Object.fromEntries(headers) : {};
        return fetch(this.baseUrl + path, {
            method: 'GET',
            headers: {
                ...this.defaultHeaders,
                ...customHeaders
            }
        })
    }

    public static post(path: string, body: any, headers: Map<string, any> = null) {
        const customHeaders = headers ? Object.fromEntries(headers) : {};
        return fetch(this.baseUrl + path, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                ...this.defaultHeaders,
                ...customHeaders
            }
        })
    }

    public static put(path: string, body: any, headers: Map<string, any> = null) {
        const customHeaders = headers ? Object.fromEntries(headers) : {};
        return fetch(this.baseUrl + path, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                ...this.defaultHeaders,
                ...customHeaders
            }
        })
    }


    public static delete(path: string, headers: Map<string, any> = null): Promise<HttpClient> {
        const customHeaders = headers ? Object.fromEntries(headers) : {};
        return fetch(this.baseUrl + path, {
            method: 'DELETE',
            headers: {
                ...this.defaultHeaders,
                ...customHeaders
            }
        })
    }
}