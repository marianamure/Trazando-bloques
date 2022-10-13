import React from "react";
import styles from './Main.module.css';

class Main extends React.Component {

    render(){

        return(
        <div className = {styles.Main}>
            <div>
                <div className = {styles.SubContents} ></div>
                <div className = {styles.SubContents} ></div>
                <div className = {styles.SubContents} ></div>
            </div>
            <div className = {styles.Advertisement} ></div>
        </div>
        );
    }
}
export default Main;