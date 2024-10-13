import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../../components/Home/Home";
import Catalog from "../../components/Catalog/Catalog";
import Contact from "../../components/Contact/Contact";
import ProductDetails from "../../components/Products/ProductDetails";
import About from "../../components/About/About";

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '', element: <Home />}, 
        { path: 'catalog', element: <Catalog /> }, 
        { path: 'catalog/:id', element: <ProductDetails /> }, 
        { path: 'about', element: <About /> }, 
        { path: 'contact', element: <Contact /> }
    ]
}]) 