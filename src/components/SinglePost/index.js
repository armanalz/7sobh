import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Icon from '../utilities/Icon';
import PopularPost from '../utilities/PopularPost'; 
import Sidebar from '../utilities/Sidebar';


const SinglePost = () => {
    return (
        <main className="singlepost_container">            

            <div className="singlepost_content">

               <div className="singlepost_header">
                    <h1 className="singlepost_header-title">دستور تازه بانک مرکزی:‌ تراکنش موبایلی تنها با کارت بانکی صاحب خط</h1>
                    <div  className="singlepost_header-left">
                            <div className="singlepost_social">
                                <Icon name="facebook" id="facebook" class="facebook"/>
                            </div>
                            <div className="singlepost_social">
                                <Icon name="twitter" id="twitter" class="twitter" />
                            </div>
                            <div className="singlepost_social">
                                <Icon name="instagram" id="instagram" class="instagram"/>
                            </div>
                            <div className="singlepost_social">
                                <Icon name="pinterest" id="pinterest" class="pinterest"/>
                            </div>
                            <div className="singlepost_social">
                                <Icon name="google-plus" id="google-plus" class="google-plus"/>
                            </div>
                        <input className="singlepost_input" type="text" placeholder="http:7sobh.com/id/244290"/>
                        <span className="singlepost_shortlink">لینک کوتاه:</span>
                    </div>
                    <div className="singlepost_header-right">
                            <span className="singlepost_label economic"> اقتصادی </span>
                            <div className="singlepost_date" style={{margin:"15px"}}>
                                <img src={require('../../resources/images/SVG/newspaper.svg')}
                                     className="singlepost_date-photo"
                                />
                                <span className="singlepost_date-text">
                                    ۲۳ دی [۱۴:۳۹] 
                                </span>
                            </div>
                            <div className="singlepost_views" style={{margin:"15px"}}>
                                <img src={require('../../resources/images/SVG/eye.svg')} 
                                     className="singlepost_views-photo"
                                />
                                <span className="singlepost_views-text">بازدید اپلیکیشن: ۲۸۳۸، بازدید سایت: ۲۷۴ </span>
                            </div>
                    </div>
                   
               </div> 
                <div className="singlepost_side_ads">
                    <div className="newspaper_wrapper" style={{margin:"0 1.5rem"}}>
                        <div className="newspaper_ads">
                            <h4 className="newspaper_ads-title">صفحه اصلی</h4>
                            <a href="#" className="newspaper_ads-link">
                                    
                                <img src={require('../../resources/images/img3.jpg')} 
                                     className="newspaper_ads-photo"
                                />
                                <p className="newspaper_ads-text">صفحه اول  هفت صبح ۲۳ دی ۹۷</p>
                            </a>
                        </div>
                    </div>
                    
                    <Sidebar/>

                    <div className="singlepost_popular"> 
                            <h2 className="main_popular-title">پربازدیدها</h2>
                            <Tabs selectedTabClassName="active_tab">
                                    <TabList className="tab_list" >
                                        <Tab className="tab_list-item" >روزانه</Tab>
                                        <Tab className="tab_list-item">هفتگی</Tab>
                                        <Tab className="tab_list-item">ماهانه </Tab>
                                    </TabList>

                                    <TabPanel>
                                        <PopularPost 
                                            ptitle="جزئیات حکم خلع لباس سید حسن آقامیری"
                                            date="۲۲ دی"
                                            views="بازدید اپلیکیشن: ۵۴۳۴، بازدید سایت: ۶۹۴"
                                            Img={require('../../resources/images/img2.jpg')}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        <PopularPost  
                                            ptitle="ماهواره ایرانی پیام پس از سقوط کجا افتاد؟"
                                            date="۲۶ دی [۱۲:۵۰] "
                                            views=" بازدید اپلیکیشن: ۶۱۵۴، بازدید سایت: ۴۵۶ "
                                            Img={require('../../resources/images/img13.jpg')}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        <PopularPost 
                                            ptitle="ماجرای دختری که “ام الخواستگارون” نام گرفت!"
                                            date="۲۶ دی [۰۷:۵۱] "
                                            views="بازدید اپلیکیشن: ۴۷۵۲، بازدید سایت: ۷۶۶ "
                                            Img={require('../../resources/images/img14.jpg')}
                                        />
                                    </TabPanel>
                            </Tabs>                        
                          
                        </div>
                  
                </div>           

                <div className="singlepost_content_container">
                   
                    <div className="singlepost_content_container-wrapper">
                        <img src={require('../../resources/images/img1.jpg')} 
                             className="singlepost_content_container-wrapper-photo"
                        />
                        <p className="singlepost_content_container-wrapper-text">بر اساس بخشنامه جدید بانک مرکزی، تراکنش‌های موبایلی باید به نحوی
                                                                               انجام شود که نام صاحب سیم‌کارت و کارت بانکی یکی باشد.
                                                                        بنابراین افرادی که قصد تراکنش‌های موبایلی دارند باید سیم‌کارت شان
                                                                         به نام خودشان باشد و از کارت بانکی استفاده کنند که بنام خودشان باشد.

                                                                    هنوز زمان اجرایی شدن این بخشنامه مشخص نیست.
                        </p>

                        <div  className="singlepost_content_container-wrapper-social">
                            <div className="singlepost_social">
                                <Icon name="facebook" id="facebook" class="facebook"/>
                            </div>
                            <div className="singlepost_social">
                                <Icon name="twitter" id="twitter" class="twitter" />
                            </div>
                            <div className="singlepost_social">
                                <Icon name="instagram" id="instagram" class="instagram"/>
                            </div>
                            <div className="singlepost_social">
                                <Icon name="pinterest" id="pinterest" class="pinterest"/>
                            </div>
                            <div className="singlepost_social">
                                <Icon name="google-plus" id="google-plus" class="google-plus"/>
                            </div>
                        </div>

                        <h2 className="singlepost_content_container-wrapper-comment">پاسخ دهید </h2>
                        <div className="singlepost_content_container-register">
                            <img src={require('../../resources/images/SVG/file-text.svg')}  className="singlepost_content_container-register-photo"/>
                            <p  className="singlepost_content_container-register-text">
                                ببخشید، برای نوشتن دیدگاه باید <a className="singlepost_content_container-register-link">
                                                                    وارد بشوید 
                                                               </a>
                            </p>
                        </div>
                    </div>
             
                </div>

           </div> {/* singlepost_content */}
    </main>
    );
};

export default SinglePost;


          