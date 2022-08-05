import React from "react";
import image from './img/logo 2.png'
import image_2 from './img/image_2.png';
import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <img className={styles.headerImage} src={image} alt="" />
            </div>
            <div className={styles.username}>
                <p className={styles.headerUsernameText}>Username</p>
                <a className={styles.headerLogOut}><img className={styles.headerLogOutImage} src={image_2} alt="" /></a>
            </div>
        </div>

    );
};

export default Header;