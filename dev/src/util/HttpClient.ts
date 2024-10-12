import {TokenUtil} from "@/util/TokenUtil.ts";

export class HttpClient {
    private static baseUrl: string = import.meta.env.VITE_BR10_API_BASE_URL;

    public static  accessToken: string = TokenUtil.getAccessToken();

    public static GET(path: string) {
        return fetch(this.baseUrl + path, {
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${(this.accessToken)}`,
                'Content-Type': 'application/json',
                "Accepted-Language": "az",
            }
        })
    }


}