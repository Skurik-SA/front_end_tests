import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const AuthVerify = (props) => {
    let location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("access_token")
        console.log(token)
        if (token) {
            const decodedJwt = parseJwt(token);

            if (decodedJwt.exp * 1000 < Date.now()) {
                console.log(`${decodedJwt.exp * 1000 } | | ${Date.now()}`)
                props.logOut();
            }
        }
    }, [location, props]);

    return ;
};

export default AuthVerify;
