import './Footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { menuItems } from '../../../constant';
import { NavLink } from 'react-router-dom';

const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const NavMenuFooter = () => (
    <Col lg className="nav-menu-footer">
        <h3 className="nav-menu-footer__title">MENU</h3>
        <ul className="nav-menu-footer__list">
            {menuItems.map((item) => (
                <div key={item.id} className="nav-menu-footer__item">
                    <NavLink
                        onClick={handleClick}
                        className={`nav-menu-footer__item-content ${
                            item.childrens && 'nav-menu-footer__item-content--had-childrens'
                        }`}
                        to={item.to}
                    >
                        {item.content}
                    </NavLink>
                    {item.childrens &&
                        item.childrens.map((itemChildren) => (
                            <div key={itemChildren.id} className="nav-menu-footer__sub-item">
                                <NavLink
                                    onClick={handleClick}
                                    className="nav-menu-footer__sub-item-content"
                                    to={itemChildren.to}
                                >
                                    {itemChildren.content}
                                </NavLink>
                            </div>
                        ))}
                </div>
            ))}
        </ul>
    </Col>
);

const ContactFooter = () => (
    <Col lg className="contact-footer">
        <h3 className="contact-footer__title">CONTACT US</h3>
        <div className="contact-footer__text">Nomad Space</div>
        <ul className="contact-footer__list-contact">
            <li className="list-contact__item">
                <i className="fa fa-location-arrow"></i>
                14 An Thuong 18, Danang
            </li>
            <li className="list-contact__item">
                <i className="fa fa-phone"></i>
                Call us +84 905 610 229{' '}
            </li>
            <li className="list-contact__item">
                <i className="fa fa-envelope-o"></i>
                <a href="mailto:info@stdsoftware.com">info@stdsoftware.com</a>
            </li>
        </ul>
    </Col>
);

function Footer() {
    return (
        <footer id="footer-section">
            <div className="footer-top">
                <div className="container">
                    <Row>
                        <NavMenuFooter />
                        <ContactFooter />
                        <Col lg>
                            <iframe
                                src={
                                    'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstunited.vn&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&appId'
                                }
                                width={340}
                                height={331}
                                style={{ border: 'none', overflow: 'hidden' }}
                                frameborder={0}
                                title="skt"
                            ></iframe>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <Row>
                        <Col md={3}>
                            <p>Copyright © 2019 by ST United.</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
