import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'docs',
                element: <Navigate to="overview" replace/>
            },
            {
                path: 'docs/overview',
                element: <></>
            },
            {
                path: 'docs/api-reference',
                element: <div className="h-full w-full bg-red-500">asdasd</div>
            },
            {
                path: 'migration',
                element: <></>
            },
            {
                path: 'playground/:param',
                element: <></>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);