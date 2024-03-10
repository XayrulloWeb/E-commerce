import Home from "./Components/Home/Home"
import Product from "./Components/Products/Product";
import Checkout from "./Components/Checkout/Checkout";
import Pricing from "./Components/Pricing/Pricing";
import Confirmation from "./Components/Confirmation/Confirmation"
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact/Contact";
const routes = [
    {

        id:1,
        path: '/',
        component: Home,
    },
    {

        id:2,
        path: '/product',
        component: Product,
    },
    {

        id:3,
        path: '/checkout',
        component: Checkout,
    },
    {

        id:4,
        path: '/confirmation',
        component: Confirmation,
    },
    {

        id:5,
        path: '/pricing',
        component: Pricing,
    },
    {

        id:6,
        path: '/cart',
        component: Cart,
    },
    {

        id:7,
        path: '/contact',
        component: Contact,
    },




]
export default routes;