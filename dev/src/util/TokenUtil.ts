
export class TokenUtil {
    static getAccessToken( ): any {
        return localStorage.getItem('accessToken');
    }

    static setAccessToken( token: any, accessToken: any) {
        localStorage.setItem('accessToken', token);
    }

}