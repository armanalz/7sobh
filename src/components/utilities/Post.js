import React from 'react';


const Post = (props) => {
    return (
        <div  className= {"post_wrapper"+props.class}>
            <h3 className={"post_title" +props.class}>{props.title}</h3>
            <img src={props.IMG} className={"post_photo"+props.class}/>
            <p className={"post_text"+props.class}>
               <span className={"post_label"+" "+props.labelClass}>{props.label}</span>
                 {props.text}
            </p>
            <div className={"post_date"+props.class}>
                <span className="post_author"> {props.author} </span>
                <span className="post_gutter">|</span>
                <a href="#" className="post_comments">  {props.comments} </a>
                <span className="post_gutter">|</span>
                <a href="#" className="post_continue">ادامه مطلب...</a>
           </div>

        </div>
    );
};

export default Post;

          