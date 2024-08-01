import { login, logout, register } from '../api/auth-api';
import { useAuthContext } from '../contexts/AuthContext';

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        result.password = '******';
        changeAuthState(result);
        return result;
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const registerHandler = async (email, password) => {
        //const { password, ...authData } = await register(email, password);
        const result = await register(email, password);

        result.password = '******';
        console.log(result);
        changeAuthState(result);

        return result;
    };

    return registerHandler;
};

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        localLogout();
        await logout();
    };

    return logoutHandler;
};

// export default function withAuth(Component) {
//     const ComponentWrapper = (props) => {
//         const authContext = useAuthContext();

//         return <Component {...props} auth={authContext} />;
//     };

//     return ComponentWrapper;
// }