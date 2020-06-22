import React from 'react'
import styles from './header.module.css'

class Header extends React.Component{
    render(){
        return(
            
            <div className={styles.navbar}>
               <div className={styles.nav}>
                <div>LOGO</div>
                    <div >
                        <ul className={styles.navitems}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Info</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
               </div>
            </div>
    
    

        )
    }
}

export default Header