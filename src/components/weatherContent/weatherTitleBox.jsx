import React from "react";
import styles from "./TitleBox.module.scss";

export class TitleBox extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Weather</h2>
        <p className={styles.text}>The weather in your city</p>
      </div>
    );
  }
}
