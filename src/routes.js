import HomeLayout from "pages/layouts/HomeLayout"

import Home from "pages/home/Home"
import Profile from "pages/home/Profile"
import Cart from "pages/home/Cart"
import Orders from "pages/home/Orders"
import Message from "pages/home/Message"

const routes = [
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "message",
                element: <Message/>
            },
            {
                path: "Orders",
                element: <Orders/>
            },
            {
                path: "cart",
                element: <Cart/>
            }
        ]
    }
]

export default routes