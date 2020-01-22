import React from 'react';
import Icon from '../utilities/Icon';

const Footer = () => {
    return (

        <footer className="footer_wrapper">

            <div className="footer_container">

                <div className="footer_search">
                    <div className="footer_search-icon">
                        <Icon name="search" id="footer-search"/>
                    </div>
                    <input type="search" placeholder="جستجو در هفت صبح" 
                            className="footer_search-input" style={{direction:"rtl"}}/>
                </div>

                <div className="quick_access"><a href="#" className="quick_access-link">دسترسی سریع</a></div>

                <div className="footer_menu">
                        <ul className="footer_menu-list">
                            <li className="footer_menu-list-item">
                                <a className="footer_menu-list-item-link">
                                  خرید اینترنتی روزنامه هفت صبح
                                </a>
                            </li>
                            <li className="footer_menu-list-item">
                                <a className="footer_menu-list-item-link">
                                  تعرفه آگهی
                                </a>
                            </li>
                            <li className="footer_menu-list-item">
                                <a className="footer_menu-list-item-link">
                                  بایگانی
                                </a>
                            </li>
                            <li className="footer_menu-list-item">
                                <a className="footer_menu-list-item-link">
                                  ارتباط با ما  
                                </a>
                            </li>
                            <li className="footer_menu-list-item">
                                <a className="footer_menu-list-item-link">
                                  شناسنامه روزنامه
                                </a>
                            </li>
                            <li className="footer_menu-list-item">
                                <a className="footer_menu-list-item-link">
                                  صفحه نخست
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="footer_copyright">تمامی حقوق مادی و معنوی این سایت متعلق به پایگاه خبری هفت صبح است. استفاده از مطالب با ذکر منبع بلامانع است.</p>

                    <p className="footer_developer">توسط راهکارهای همراه کارینا </p>

            </div> {/* footer_container */}
        </footer>
        
    );
};

export default Footer;