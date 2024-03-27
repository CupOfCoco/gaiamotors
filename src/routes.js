
import Home from './pages/Home';
import Featured from './pages/Featured';
import Product from './pages/Product';
import Contact  from './pages/Contact';

const routes = [
    { path: '/', component: <Home />, exact: true },
    {path: '/featured', component: <Featured /> },
    {path: '/product', component: <Product /> },
    {path: '/contact', component: <Contact /> },
];


export default routes;