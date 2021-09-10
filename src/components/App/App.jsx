import React from "react";
import { TitleBox } from "../weatherContent/weatherTitleBox";
import { WeatherContent } from "../weatherContent/weatherContent";
import styles from "./App.module.scss";

export class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <TitleBox />
        <WeatherContent />
      </div>
    );
  }
}
