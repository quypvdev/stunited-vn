//Layouts
import Home from '../pages/Home/index';
import StDigitalPage from '../pages/STDigital/stDigital';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-digital', component: StDigitalPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
