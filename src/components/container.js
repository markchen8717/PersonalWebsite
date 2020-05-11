import React from 'react'
import Styles from "../styles/container.module.css"


export default function Container(props) {
    return (
        <div className={Styles.container} style = {props.backgroundColor}>
            <img className={Styles.background} src={props.background} />
            <div className={Styles.children} style={props.style}>
                {props.children}
            </div>
        </div>
    );
};
