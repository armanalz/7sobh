import React from 'react';
import eye from '../../resources/images/SVG/eye.svg';
import newspaper from '../../resources/images/SVG/newspaper.svg';

const PopularPost = (props) => {
    return (
        <div className="popost_wrapper" style={{borderBottom:props.borderBottom}}>
            
            <div className="popost_content">
                <h3 className="popost_title">{props.ptitle}</h3>
                <div className="popost_date">
                   <img src={newspaper} className="popost_date-photo"/>
                   <span className="popost_date-text">{props.date}</span>
                </div>
                <div className="popost_views">
                   <img src={eye} className="popost_views-photo"/>
                   <span className="popost_views-text">{props.views}</span>
                </div>
            </div>
            <div className="popost_photo-wrapper">
                <img src={props.Img} className="popost_photo"/>
            </div>
        </div>
    );
};

export default PopularPost;