import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
import Icon from '../utilities/Icon';


class Header extends Component {
   
    state = {

        open:false,
        WindowSize : window.innerWidth
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    handleResize=(WindowSize, event) => {
          this.setState({WindowSize: window.innerWidth})
    }

    toggleDrawer = () => {

        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    closeDrawer = () => {

        this.setState({
            open:false
          });
    }

    render() {
        return (

            <div className="header_wrapper_container">

                <div className="header_wrapper">
                    <div className="header_top-image">
                        <img className="header_top-image-photo" alt="top image" 
                                src={require('../../resources/images/8af069ebda554d9e2428b102f20e43b3.gif')}
                        />
                    </div>
                  <div className="header_content-container">

                        <div className="search_tools"
                             style={{transition:"all .3s ease-out",
                                     height:this.state.WindowSize <700 && this.state.open ? "60px" : null
                                    }}
                        >
                            <div className="search_stuff">
                                <div className="search_icon">
                                    <Icon name="search" id="search" />
                                </div>
                                <input type="search" placeholder="جستجو در هفت صبح" 
                                    className="search_input" style={{direction:"rtl"}}/>
                                <div className="android" >
                                    <Icon name="android" id="android" />
                                </div>
                                <div className="ios">
                                    <Icon name="appleinc" id="appleinc" />
                                </div>
                            </div>
                            <div className="header_menu">
                                <ul className="header_menu-list">
                                    <li className="header_menu-list-item">
                                        <a className="header_menu-list-item-link">
                                            بایگانی
                                        </a>
                                    </li>
                                    <li className="header_menu-list-item">
                                        <a className="header_menu-list-item-link">
                                            ارتباط با ما
                                        </a>
                                    </li>
                                    <li className="header_menu-list-item">
                                        <a className="header_menu-list-item-link">
                                            خرید اینترنتی روزنامه
                                        </a>
                                    </li>
                                    <li className="header_menu-list-item">
                                        <a className="header_menu-list-item-link">
                                            مرامنامه اخلاقی
                                        </a>
                                    </li>
                                    <li className="header_menu-list-item">
                                        <a className="header_menu-list-item-link">
                                            تعرفه آگهی
                                        </a>
                                    </li>
                                    <li className="header_menu-list-item">
                                        <a className="header_menu-list-item-link">
                                        دانلود اپلیکیشن هفت صبح
                                        </a>
                                    </li>
                                    <li className="header_menu-list-item">
                                        <a className="header_menu-list-item-link">
                                        شناسنامه روزنامه
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div> {/*   search_tools */}
                
                    <div className="header_logo">
                        <div className="IconButton_wrapper" onClick={() => this.toggleDrawer()} >
                            <div  className="IconButton" >
                            <span className="menue__icon"
                                style={{top:"10px",
                                transform:this.state.WindowSize <700 && this.state.open ? "translateY(6.5px) rotate(45deg) " : null
                                }}></span>
                            <span className="menue__icon"
                                style={{top:"16px",
                                display:this.state.WindowSize <700 &&this.state.open ? "none" : null}}></span>
                            <span className="menue__icon"
                                style={{top:"23px",
                                transform:this.state.WindowSize <700 && this.state.open ? "translateY(-6.5px) rotate(-45deg)" : null}}></span>
                            </div>
                        </div>
                        <a href="#" className="header_logo-link">
                            
                        </a>
                    </div>
                    
                    <div className="nav_container" 
                         style={{transition:"all .3s ease-out",
                                 height:this.state.WindowSize < 700 && this.state.open ? "480px" : null
                                }}
                    >
                        <nav className="header_nav">
                            <ul  className="header_nav-list" style={{direction:"ltr"}}>
                                <li className="header_nav-list-item">
                                    <NavLink to="/health" activeClassName="active" exact 
                                                style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                                onClick={() => this.closeDrawer() }> 
                                        سلامت و زندگی
                                    </NavLink> 
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/entertainment" activeClassName="active" exact 
                                                style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                                onClick={() => this.closeDrawer() }>
                                        دیدنی‌ها
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/economy" activeClassName="active" exact 
                                            style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                            onClick={() => this.closeDrawer() }>
                                    اقتصادی
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/social"  activeClassName="active" exact 
                                            style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                            onClick={() => this.closeDrawer() }>
                                          اجتماعی
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/sport" activeClassName="active" exact 
                                            style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                            onClick={() => this.closeDrawer() }>
                                          ورزشی
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/cultural" activeClassName="active" exact 
                                                style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                                onClick={() => this.closeDrawer() }>
                                        فرهنگی
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/political" activeClassName="active" exact 
                                                style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                                onClick={() => this.closeDrawer() }>
                                        سیاسی
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/science" activeClassName="active" exact 
                                                style={{ textDecoration:"none"}} className="header_nav-list-item-link"
                                                onClick={() => this.closeDrawer() }>
                                        دانش و فناوری
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/world" activeClassName="active" exact 
                                                className="header_nav-list-item-link" style={{ textDecoration:"none"}}
                                                onClick={() => this.closeDrawer() }> 
                                        جهان
                                    </NavLink>
                                </li>
                                <li className="header_nav-list-item">
                                    <NavLink to="/" activeClassName="active" exact 
                                                style={{ textDecoration:"none"}} className={"header_nav-list-item-link"}
                                                onClick={() => this.closeDrawer() }>
                                        صفحه نخست
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="first_page" style={{direction:"rtl"}}>
                            <Link to="newspaper-first-page" style={{ textDecoration:"none"}}>
                                <a className="first_page-link">صفحه اول روزنامه</a>
                            </Link>
                        </div>
                        <div className="apps_container">
                                <div className="android_bottom">
                                        <Icon name="android" />
                                </div>
                                <div className="ios_bottom">
                                        <Icon name="appleinc" /> 
                                </div>
                        </div>

                    </div>  {/* nav_container */}

                  </div> {/*  header_content-container */}

                </div> {/*  header_wrapper */}

          </div> /*  header_wrapper_container */
        );
    }
}

export default Header;