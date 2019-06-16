import config from './config';

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token);
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY);
    }
}

export default TokenService;