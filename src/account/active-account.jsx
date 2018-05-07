import React from 'react';
import '../../public/css/sidebar.css';

const ActiveAccount = (props) => {
    return (
        <div className="active-account">
            <img className="account-pic" src={props.image}/>
            <p className="account-name">{props.name}</p>
        </div>
    );
}

export default ActiveAccount;