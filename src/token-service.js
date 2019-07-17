import config from './config';

const TokenService = {
    saveAuthToken(token) {
        sessionStorage.setItem(config.TOKEN_KEY, token);
    },
    clearStorage() {
        sessionStorage.clear();
    },
    getAuthToken() {
        return sessionStorage.getItem(config.TOKEN_KEY);
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken();
    }
}

export default TokenService;