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
    console.log("costumer hook auth funciona", stateAuth)
    return {
        handleAuth,
        stateAuth,
    }
}

export default useAuthState;