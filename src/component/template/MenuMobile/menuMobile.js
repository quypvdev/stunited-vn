import './MenuMobile.scss';
import images from '../../../assets/images/index';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from '../../../constant';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function MenuMobile() {
    const ref = useRef();

    const [menuMobileToggle, setMenuMobileToggle] = useState(false);
    const [subMobileToggle, setSubMobileToggle] = useState(false);

    const handleBtnMenuMobile = () => {
        setMenuMobileToggle(!menuMobileToggle);
        const menuBtn = document.getElementById('mobile-menu-btn');
        menuBtn.classList.add('menu-mobile__menu-btn-status--disable');
    };
    const handleMenuItemsClick = () => {
        setMenuMobileToggle(false);
        const menuBtn = document.getElementById('mobile-menu-btn');
        menuBtn.classList.remove('menu-mobile__menu-btn-status--disable');
    };

    const handleBtnSubMenuMobile = () => {
        setSubMobileToggle(!subMobileToggle);
    };

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (menuMobileToggle && ref.current && !ref.current.contains(e.target)) {
                setMenuMobileToggle(false);
                const menuBtn = document.getElementById('mobile-menu-btn');
                menuBtn.classList.remove('menu-mobile__menu-btn-status--disable');
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [menuMobileToggle]);

    return (
        <div className="mobile-header d-lg-none position-relative">
            <div className="container-mobile container ">
                <div className="row row-cols-4 menu-mobile">
                    <div className="col menu-mobile__menu-btn">
                        <button
                            id="mobile-menu-btn"
                            className="menu-mobile__menu-btn-status"
                            onClick={handleBtnMenuMobile}
                        >
                            <i className="fa fa-navicon menu-btn__icon-mobile"></i>
                        </button>
                    </div>
                    <div className="col-6 menu-mobile__logo-box">
                        <NavLink to={'/'}>
                            <img className="logo-box__img" src={images.logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className={`nav-menu-mobile-dropdown ${menuMobileToggle ? 'nav-menu-mobile-dropdown-active' : ''}`}>
                <nav className="nav-menu-mobile">
                    <ul ref={ref} className="main-menu-mobile">
                        {menuItems.map((item) => (
                            <div key={item.id}>
                                {!item.childrens ? (
                                    <NavLink
                                        onClick={handleMenuItemsClick}
                                        to={item.to}
                                        className={`nav-item-mobile ${
                                            item.childrens && subMobileToggle ? 'nav-item-mobile-active' : ''
                                        } ${item.childrens && 'nav-item-mobile--had-children'}`}
                                    >
                                        <NavLink to={item.to} className="item-content">
                                            {item.content}
                                        </NavLink>
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        className={`nav-item-mobile ${
                                            item.childrens && subMobileToggle ? 'nav-item-mobile-active' : ''
                                        } ${item.childrens && 'nav-item-mobile--had-children'}`}
                                    >
                                        <button className="nav-item-mobile-active-btn" onClick={handleBtnSubMenuMobile}>
                                            <NavLink className="item-content">{item.content}</NavLink>
                                            {subMobileToggle ? (
                                                <FontAwesomeIcon className="sub-menu-mobile-icon" icon={faCaretDown} />
                                            ) : (
                                                <FontAwesomeIcon className="sub-menu-mobile-icon" icon={faCaretRight} />
                                            )}
                                        </button>
                                    </NavLink>
                                )}

                                {item.childrens && (
                                    <ul
                                        className={`sub-menu-mobile ${subMobileToggle ? 'sub-menu-mobile-active' : ''}`}
                                    >
                                        {item.childrens ? (
                                            item.childrens.map((itemChildren) => (
                                                <NavLink
                                                    onClick={handleMenuItemsClick}
                                                    to={itemChildren.to}
                                                    className="sub-item-mobile"
                                                    key={itemChildren.id}
                                                >
                                                    <NavLink to={item.to} className="item-content-mobile">
                                                        {itemChildren.content}
                                                    </NavLink>
                                                </NavLink>
                                            ))
                                        ) : (
                                            <></>
                                        )}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MenuMobile;
