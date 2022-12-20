import './Home.module.scss';
import Banner from "../../component/template/Banner/index";
import Typical from "../../component/template/Typical/Typical";
import Wedevelop from "../../component/template/WeDevelop/wedevelop";
import Partner from "../../component/template/Partners/partner";

function Home() {
    return (
        <>
            <Banner />
            <Typical />
            <Wedevelop />
            <Partner />
        </>
    );
}

export default Home;
