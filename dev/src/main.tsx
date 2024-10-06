import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {UserProfilePage} from "@/components/user-profile-page.tsx";
import {LoginPageV3} from "@/components/LoginPageV3.tsx";
import {MainPage} from "@/layouts/main/MainPage.tsx";
import {URLRequestPage} from "@/components/urlrequest-page.tsx";
import {Provider} from 'react-redux';
import {store} from './redux/store.ts';
import {AuthProvider} from './AuthProvider.tsx'; // AuthProvider import edin
import ProtectedRoute from './ProtectedRoute.tsx';
import Logout from "@/Logout.tsx";
import {RegisterV2} from "@/layouts/register/RegisterV2.tsx";
import {OTPVerification} from "@/layouts/register/OTPVerification.tsx"; // ProtectedRoute import edin

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/login',
        element: <LoginPageV3/>,
    },
    {
        path: '/register',
        // element: <Register />,
        element: <RegisterV2/>,
    },
    // Protected routes
    {
        path: '/profile/:param',
        element: (
            <ProtectedRoute>
                <UserProfilePage/>
            </ProtectedRoute>
        ),
    },
    {
        path: '/otp-verification',  // Add route for OTP Verification
        element: <OTPVerification/>,  // Reference the OTPVerification component
    },
    {
        path: '/main/:specialistId',
        element: (
            <ProtectedRoute>
                <MainPage/>
            </ProtectedRoute>
        ),
    },
    {
        path: '/url-request',
        element: (
            <ProtectedRoute>
                <URLRequestPage/>
            </ProtectedRoute>
        ),
    },
    {
        path: '/logout',
        element: <Logout/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </Provider>
);