import axios from '../utils/AxiosCustomize';

const getAllDataFE02 = () => {
    return axios.get('fe02-typical');
};
const getAllDataFE07Div1 = () => {
    return axios.get('fe07-div1');
};
const getAllDataFE07Div2 = () => {
    return axios.get('fe07-div2');
};
const getAllDataPortfolio = () => {
    return axios.get('portfolio');
};
const getAllDataStDigitalIcon = () => {
    return axios.get('st-digital-icon');
};
const getAllDataStDigitalImage = () => {
    return axios.get('st-digital-image');
};
const getAllDataPartner = () => {
    return axios.get('partner');
};
const getAllDataJoinUs = () => {
    return axios.get('join-us');
};
const getAllDataWedevelop = () => {
    return axios.get('we-develop');
};
const getAllDataIncubationText = () => {
    return axios.get('incubation-1');
};
const getAllDataIncubation = () => {
    return axios.get('incubation');
};
export {
    getAllDataFE02,
    getAllDataFE07Div1,
    getAllDataFE07Div2,
    getAllDataPortfolio,
    getAllDataStDigitalIcon,
    getAllDataStDigitalImage,
    getAllDataPartner,
    getAllDataJoinUs,
    getAllDataWedevelop,
    getAllDataIncubationText,
    getAllDataIncubation,
};
