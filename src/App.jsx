import MyoasisAccounts from 'myoasis-accounts';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Index from './home/Index';
import Context from "./app/Context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase/user';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        if (error) console.error(error);
    }, [error]);

    useEffect(() => {

    }, [user]);

    const context = {

        user,
        userError: error,
        userLoading: loading,

        goto(to, replace = false) {
            const url = new URL(to, window?.location.origin);
            if (url.href === location.href) return;
            navigate(to, { replace: replace });
        },
        back() {
            if (location.key !== "default" && location.pathname !== "/") {
                navigate(-1);
            } else {
                navigate("/", { replace: true });
            }
        },
    };
    return (
        <Context.Provider value={context}>
            <Routes>
                <Route path="/accounts/*" element={<MyoasisAccounts onUserChange={null} />} />
                <Route exact path="/" element={<Index />} />
            </Routes>
        </Context.Provider>
    );
};

export default App;