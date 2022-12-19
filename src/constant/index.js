import images from '../assets/images/index';
export const menuItems = [
    { id: 1, content: 'Home', to: '/' },
    {
        id: 2,
        content: 'What we do',
        to: '/st-software',
        childrens: [
            { id: 1, content: 'St Software', to: '/st-software' },
            { id: 2, content: 'St Digital', to: '/st-digital' },
            { id: 3, content: 'St Incubation', to: '/st-incubation' },
        ],
    },
    { id: 3, content: 'Who we are', to: '/who-we-are' },
    { id: 4, content: 'Portfolio', to: '/portfolio' },
    { id: 5, content: 'Join us', to: '/join-us' },
    { id: 6, content: `Let's talk`, to: '/lets-talk' },
];

export const bannerItems = [
    { id: 0, content: 'Collaborate to kick-start your software project', img: images.banner1 },
    { id: 1, content: 'We code, we care', img: images.banner2 },
    { id: 2, content: 'We also do digital marketing', img: images.banner3 },
    { id: 3, content: 'And we are incubating startup projects too...', img: images.banner4 },
];
