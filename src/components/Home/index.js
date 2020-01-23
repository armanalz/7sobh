import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Post from '../utilities/Post'; 
import PopularPost from '../utilities/PopularPost'; 
import Sidebar from '../utilities/Sidebar';
import Notes from '../utilities/Notes';


const Home = () => {
    return (
        <main className="main_container">
            <div className="main_top">
                <h1 className="main_top-title">چه حکمی در انتظار پسر ۱۳ساله متهم به قتل است؟</h1>
                <img className="main_top-photo" src={require('../../resources/images/home_top.jpg')}/>
                <span className="main_top-date" style={{direction:"rtl"}}> 
                      ۲۳ دی [۱۴:۵۹] <p className="home_top-date-gutter">|</p> نظرات (0)  
                </span> 
            </div>

            <div className="newspaper_wrapper__top" style={{margin:"0 1.5rem"}}>
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
            

            <div className="main_content">         

                <div className="side_ads">
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

                    <div className="notes_container">
                        <h2 className="side_ads-title">یادداشت ها</h2>
                        <div  className="notes_content">
                            <Notes/>
                            <Notes/>
                        </div>
                    </div>
                  
                </div>

                <div className="content_container">

                    <div className="main_middle">
                        <div className="main_popular"> 
                            <h2 className="main_popular-title">پربازدیدها</h2>
                            <Tabs selectedTabClassName="active_tab">
                                    <TabList className="tab_list" >
                                        <Tab className="tab_list-item" >روزانه</Tab>
                                        <Tab className="tab_list-item">هفتگی</Tab>
                                        <Tab className="tab_list-item">ماهانه </Tab>
                                    </TabList>

                                    <TabPanel>
                                        <Link to="/singlepost" style={{textDecoration:"none"}}>
                                            <PopularPost 
                                                ptitle="جزئیات حکم خلع لباس سید حسن آقامیری"
                                                date="۲۲ دی"
                                                views="بازدید اپلیکیشن: ۵۴۳۴، بازدید سایت: ۶۹۴"
                                                Img={require('../../resources/images/img2.jpg')}
                                            />
                                        </Link>
                                    </TabPanel>
                                    <TabPanel>
                                        <Link to="/singlepost" style={{textDecoration:"none"}}>
                                            <PopularPost  
                                                ptitle="ماهواره ایرانی پیام پس از سقوط کجا افتاد؟"
                                                date="۲۶ دی [۱۲:۵۰] "
                                                views=" بازدید اپلیکیشن: ۶۱۵۴، بازدید سایت: ۴۵۶ "
                                                Img={require('../../resources/images/img13.jpg')}
                                            />
                                       </Link>
                                    </TabPanel>
                                    <TabPanel>
                                       <Link to="/singlepost" style={{textDecoration:"none"}}>
                                            <PopularPost 
                                                ptitle="ماجرای دختری که “ام الخواستگارون” نام گرفت!"
                                                date="۲۶ دی [۰۷:۵۱] "
                                                views="بازدید اپلیکیشن: ۴۷۵۲، بازدید سایت: ۷۶۶ "
                                                Img={require('../../resources/images/img14.jpg')}
                                            />
                                       </Link>
                                    </TabPanel>
                            </Tabs>               
                          
                        </div>

                        <div className="main_latest1">
                            <h2 className="main_latest1-title">آخرین اخبار</h2>

                           <Link to="/singlepost" style={{textDecoration:"none"}}>
                                <Post label="اقتصادی" class="" labelClass="economic"
                                    title="دستور تازه بانک مرکزی:‌ تراکنش موبایلی تنها با کارت بانکی صاحب خط"
                                    text="بر اساس بخشنامه جدید بانک مرکزی، تراکنش‌های موبایلی باید به نحوی انجام شود که نام صاحب سیم‌کارت و کارت بانکی یکی باشد. بنابراین افرادی که قصد تراکنش‌های موبایلی دارند باید سیم‌کارت شان به نام خودشان باشد و از کارت بانکی استفاده کنند که بنام خودشان باشد. هنوز زمان اجرایی شدن…..."
                                    author="نوشته شده در ۲۳ دی [۱۴:۳۹] "
                                    comments=" نظرات (0)"
                                    IMG={require('../../resources/images/img1.jpg')}
                                    />
                           </Link>
                           <Link to="/singlepost" style={{textDecoration:"none"}}>
                                <Post label="جهان" class="" labelClass="world"
                                    title="کانادا برای دختر فراری عربستانی محافظ شخصی گذاشت"
                                    text="	دولت کانادا برای حفظ امنیت رهف محمد القنون، دختر ۱۸ ساله عربستانی، محافظ شخصی تعیین کرد. القنون پس از سفر خانوادگی به کویت عازم تایلند شد. او بنا داشت از تایلند به استرالیا برود، که گذرنامه‌اش توقیف شد سپس به کانادا پناهنده شد و هم اکنون ساکن این کشور است.…... "
                                    author=" نوشته شده در ۲۶ دی [۱۵:۰۰] "
                                    comments=" نظرات (0)"
                                    IMG={require('../../resources/images/img4.jpg')}
                                />
                           </Link>
                           <Link to="/singlepost" style={{textDecoration:"none"}}>
                                <Post label="اجتماعی" class="" labelClass="sociall"
                                title="دانشجوی نخبه راز موادفروش را فاش کرد"
                                text=" دزد سابقه‌دار وقتی دریافت فروش مواد مخدر بین دانشجویان درآمد بیشتری دارد، دور دزدی را خط کشید و مواد فروش شد. چندی قبل مرد جوانی با پلیس تماس گرفت و از توزیع مواد مخدر در مقابل دانشگاهی که درس می‌خواند خبر داد. او گفت: از مدتی قبل متوجه شدم یک…... "
                                author="نوشته شده در ۲۶ دی [۰۲:۳۰]"
                                comments=" نظرات (0)"
                                IMG={require('../../resources/images/Img5.jpg')}
                                />
                           </Link>    
                        </div>
                    </div>

                    <div className="main_latest2">
                        <h2 className="main_latest2-title">آخرین اخبار</h2>
                        <Link to="/singlepost" style={{textDecoration:"none"}}>
                            <Post label="	ورزشی " class="" labelClass="sport"
                                title="برنامه امروز پخش زنده مسابقات ورزشی از تلویزیون"
                                text="	چهارشنبه ۲۶ دی **** جام ملت های آسیا کره جنوبی - چین ساعت: ۱۷:۰۰ زنده از شبکه ورزش **** جام ملت های آسیا ویتنام - یمن ساعت: ۱۹:۳۰ زنده از شبکه ورزش **** جام ملت های آسیا ایران - عراق ساعت: ۱۹:۳۰ زنده از شبکه سه... "
                                author="نوشته شده در ۲۶ دی [۰۹:۳۰]"
                                comments=" نظرات (2) "
                                IMG={require('../../resources/images/img7.jpg')}
                            />
                        </Link>
                        <Link to="/singlepost" style={{textDecoration:"none"}}> 
                            <Post label="سیاسی" class="" labelClass="political"
                                title="سخنان انتقادی رفیق‌دوست: ۲۰ ماه گذشت، اما یک ایستگاه مترو افتتاح نشد"
                                text="محسن رفیق‌دوست وزیر سپاه در دهه ۶۰، در پنجمین همایش مدیریت جهادی بیان کرد: امروز سرعت کار نسبت به زمان جنگ خیلی پایین است. در همین جلسه یکی از مدیران سابق شهرداری تهران حضور دارد، در دوره قبلی مدیریت شهری هر ماه یک ایستگاه مترو افتتاح می‌شد، اما اکنون ۲۰…... "
                                author=" نوشته شده در ۲۶ دی [۰۸:۲۹] "
                                comments=" نظرات (0)"
                                IMG={require('../../resources/images/img8.jpg')}
                            />
                        </Link>
                        <Link to="/singlepost" style={{textDecoration:"none"}}> 
                            <Post label="سلامت و زندگی" class="" labelClass="health"
                                title="به این چند دلیل هر روز سیر بخورید"
                                text="اگر نگران هستید دچار بیماری قلبی، حمله قلبی و یا سکته مغزی شوید سیر بخورید. سیر، فشار خون را پایین می‌آورد و به اندازه‌ی داروهای تجویزی در این کار مؤثر است. مصریان، رومی‌ها و یونانیان باستان به کارگران، ورزشکاران المپیک و سربازان و ماهیگیران سیر می‌دادند، چون عقیده داشتند، سیر…... "
                                author="نوشته شده در ۲۴ دی [۲۳:۵۹]"
                                comments=" نظرات (0)"
                                IMG={require('../../resources/images/img9.jpg')}
                            />
                        </Link>
                        <Link to="/singlepost" style={{textDecoration:"none"}}>
                            <Post label="فرهنگی" class="" labelClass="cultural"
                                title="آخرین حضور حسین محب‌اهری روی صحنه"
                                text="حسین محب‌اهری علیرغم بیماری تا جایی که توان داشت از حرکت نایستاد و به نقش‌هایی جان داد که آخرینش در نمایش «خسیس» بود. به گزارش خبرآنلاین، آخرین حضور حسین محب‌اهری بر صحنه تئاتر در نمایش «خسیس» به کارگردانی مریم کاظمی رقم خورد. او علیرغم بیماری در این نمایش نیز نقش…... "
                                author="نوشته شده در ۲۶ دی [۱۶:۴۹]"
                                comments=" نظرات (0)"
                                IMG={require('../../resources/images/img10.jpg')}
                            />
                        </Link>
                        <Link to="/singlepost" style={{textDecoration:"none"}}>
                            <Post label="دانش و فناوری" class="" labelClass="science"
                                title="مازراتی گرن‌توریسمو، آماده خداحافظی از بازار"
                                text="هفت صبح، ارسلان سلیمانیان| امسال آخرین سال تولید خودروی دوست داشتنی«مازراتی گرن توریزمو» است. به همین بهانه نگاهی نو انداخته‌ایم به این کوپه گران قیمت ایتالیایی. مازراتی «گرن توریزمو» نخستین بار در نمایشگاه خودرو ژنو سال ۲۰۰۷ رونمایی شد. این خودرو که محصولی در کلاس کوپه های لوکس محسوب می…... "
                                author="نوشته شده در ۲۶ دی [۰۱:۳۷]"
                                comments=" نظرات (0)"
                                IMG={require('../../resources/images/img6.png')}
                                />
                        </Link>
                            
                    </div>

                    <div className="main_old">

                       <h2 className="main_old-title">اخبار قدیمی</h2>
                       <Link to="/singlepost" style={{textDecoration:"none"}}>
                            <Post label="دیدنی‌ها" class="-old" labelClass="entertainment"
                                    title="حسین محب اهری؛ از خبرنگاری تا بازیگری"
                                    text="حسین محب‌اهری بازیگر قدیمی تئاتر، تلویزیون و سینما امروز ۲۶ دی ۱۳۹۷ در ۶۷سالگی درگذشت. محب‌اهری لیسانس ادبیات فارسی را از مدرسهٔ عالی ادبیات و زبان‌های خارجی در سال ۱۳۵۸ دریافت کرده‌است. یک دوره آموزش بازیگری در کارگاه نمایش، زیر نظر آربی اوانسیان در سال ۱۳۵۴ دید. بازی در سینما…... "
                                    author="نوشته شده در ۲۶ دی [۱۰:۳۰]"
                                    comments=" نظرات (0)"
                                    IMG={require('../../resources/images/img11.jpg')}
                                />
                        </Link>
                        <Link to="/singlepost" style={{textDecoration:"none"}}>
                            <Post label="اجتماعی" class="-old" labelClass="sociall"
                                title="چه تعداد سارق حرفه‌ای در کشور داریم؟"
                                text="جانشین فرمانده ناجا تعداد سارقان حرفه‌ای در سراسر کشور را اعلام کرد. سردار ایوب سلیمانی در حاشیه همایش تخصصی معاونین و روسای ادارات مبارزه با سرقت پلیس آگاهی با حضور در جمع خبرنگاران درباره مبارزه با سرقت اظهار کرد: بنابر آمارهای ما حدود ۲۰۰ هزار نفر سارق حرفه ای در…... "
                                author=" نوشته شده در ۲۶ دی [۱۳:۳۰] "
                                comments=" نظرات (0)"
                                IMG={require('../../resources/images/img12.jpg')}
                            />
                        </Link>

                    </div>

                </div>  {/* content_container */}

           </div>  {/* main_content */}

    </main>
    );
};

export default Home;


          