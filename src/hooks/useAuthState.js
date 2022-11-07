import {useState} from "react";

const initialAuth = true;

const useAuthState = () => {
    const [stateAuth, setStateAuth] = useState(initialAuth);

    
    const handleAuth = () => {
        if(stateAuth) {
            setStateAuth(null)
        }else{
            setStateAuth(true)
        }
    };
    return {
        handleAuth,
        stateAuth,
    }
}

export default useAuthState;