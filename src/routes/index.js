//Layouts
import Home from '../pages/Home/home';
import StDigitalPage from '../pages/STDigital/stDigital';
import Portfolio from '../pages/Portfolio/portforlio';
import WhoWeAre from '../pages/WhoWeAre/index';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-digital', component: StDigitalPage },
    { path: '/portfolio', component: Portfolio },
    { path: '/who-we-are', component: WhoWeAre },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
