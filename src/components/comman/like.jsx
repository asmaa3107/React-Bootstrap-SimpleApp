import React from 'react';
//imr => import react comp
//sfc shortcut to quickcreate statless component
const Like = props => {
    let classes ='text-danger fa fa-heart';
     if(!props.Liked) classes+='-o'; 
    return (
      <span>
        <i className={classes}
        onClick={props.onClick}
        aria-hidden="true"  data-cursor='hand'/>
      </span>
     );
}
 
export default Like;


