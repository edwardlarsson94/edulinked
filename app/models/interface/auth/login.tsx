export interface LoginState {
    showLogin: boolean;
    updateShowLogin: (newShowLogin: boolean) => void;
    isAuthenticated: boolean;
    updateIsAuthenticated: (newIsAuthenticated: boolean) => void;
}