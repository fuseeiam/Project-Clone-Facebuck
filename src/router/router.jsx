import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import FriendPage from "../pages/FriendPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'friend', element: <FriendPage /> },
            { path: 'profile/:profileId', element: <ProfilePage /> },
        ]
    },
]);

export default function Route() {
    return <RouterProvider router={router} />
}