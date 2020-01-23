import React from 'react';
import banner from '../../resources/images/banner.jpg';
import appbanner from '../../resources/images/appdl-banner.jpg';
import gif3 from '../../resources/images/gif3.gif';
import png1 from '../../resources/images/png1.png';
import gif2 from '../../resources/images/gif2.gif';
import gif1 from '../../resources/images/gif1.gif';
import fb from '../../resources/images/SVG/facebook.svg';
import tw from '../../resources/images/SVG/twitter.svg';
import ins from '../../resources/images/SVG/instagram.svg';
import yt from '../../resources/images/SVG/youtube.svg';
import rss from '../../resources/images/SVG/rss.svg';

const Sidebar = () => {
    return (
        <div  className="ads__wrapper">

            <div className="ads_banner">
              <img className="ads_banner-photo" src={banner}/>
            </div>

            <div  className="ads_image-wrapper">
                   <img className="ads_image" src={gif3}/>
                   <img className="ads_image"src={png1}/>
                   <img className="ads_image" src={gif2}/>
                   <img className="ads_image" src={gif1}/>
            </div>

            <div className="social">

                 <h3 className="social-title">هفت صبح را دنبال کنید:</h3>

                 <div className="facebook">
                     <img src={fb}/>
                 </div>
                 <div className="twitter">
                     <img src={tw}/>
                 </div>
                 <div className="instagram">
                     <img src={ins}/>
                 </div>
                 <div className="youtube">
                     <img src={yt}/>
                 </div>
                 <div className="siterss">
                     <img src={rss}/>
                 </div>

            </div>

            <div className="registration">
                 <h3 className="registration-title">عضویت در خبرنامه</h3>
                 <div className="registration-content">
                     <button className="registration-btn">عضویت</button>
                     <input className="registration-input" type="text" name="email"
                                 placeholder="آدرس ایمیل خود را وارد نمایید"/>
                 </div>
            </div>

            <div className="app_banner">
                 <img className="app_banner-photo" src={appbanner}/>
            </div>
        </div>
    );
};

export default Sidebar;