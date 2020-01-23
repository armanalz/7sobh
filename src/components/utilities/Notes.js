import React from 'react';
import user from '../../resources/images/SVG/user.svg';

const Notes = () => {
    return (
        <div className="notes_wrapper">
            <div className="notes_header">
                <h3 className="notes_header-title">تک نگاری در روزنامه هفت صبح</h3>
                <img className="notes_header-photo" src={user}/>
            </div>
            <h4 className="notes_title">چراغ همیشه سبز شبکه شتاب برای سایت‌های قمار!</h4>
            <p className="notes_text">روزنامه هفت‌صبح ، حسین کلهر| بتفا، بت بال، بت چی و چندده سایت قمار بازی؛ تا امروز حتما اسم این سایت یا سایت‌های مشابه را شنیده‌اید که به طور مشخص پیش‌بینی فوتبال، قمار و بازی‌های کازینویی را تبلیغ می‌کنند. فعالیت و تبلیغ این سایت‌ها در کشورهای اسلامی به طور کامل…..</p>
            <a className="notes_link">ادامه مطلب</a>
        </div>
    );
};

export default Notes;