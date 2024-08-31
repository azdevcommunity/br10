import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Register} from "@/layouts/register/Register.tsx";
import {UserProfilePage} from "@/components/user-profile-page.tsx";
import {LoginPage} from "@/components/login-page.tsx";
import {MainPage} from "@/layouts/main/MainPage.tsx";
import {URLRequestPage} from "@/components/urlrequest-page.tsx";
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            // {
            //     path: 'docs',
            //     element: <Navigate to="overview" replace/>
            // },
            // {
            //     path: 'docs/overview',
            //     element: <></>
            // },
            // {
            //     path: 'docs/api-reference',
            //     element: <div className="h-full w-full bg-red-500">asdasd</div>
            // },

            {
                path: 'playground/:param',
                element: <></>
            }
        ],
    },
    {
        path: 'login',
        element: <LoginPage/>
    },
    {
        path: 'register',
        element: <Register/>
    },
    {
        path: 'profile/:param',
        element: <UserProfilePage/>
    },
    {
        path: 'main',
        element: <MainPage/>
    },
    {
        path: 'url-request',
        element: <URLRequestPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
);