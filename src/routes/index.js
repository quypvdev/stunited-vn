//Layouts
import Home from '../pages/Home/home';
import StDigitalPage from '../pages/STDigital/stDigital';
import Portfolio from '../pages/Portfolio/portforlio';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-digital', component: StDigitalPage },
    { path: '/portfolio', component: Portfolio },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
