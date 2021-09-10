import axios from "axios";
import React from "react";
import styles from "./Content.module.scss";

let API_KEY = "4bceb7aef7bf63fe4ee81c53b0ad0930";

export class WeatherContent extends React.Component {
  state = {
    currentDate: new Date(),
    city: undefined,
    temp: undefined,
    wind: undefined,
  };
  getWeather = (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          const data = response.data;
          const temp = Math.round(data.main.temp);
          this.setState({
            city: data.name,
            temp: temp,
            wind: data.wind.speed,
          });
        });
    }
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  renderFormatDate() {
    return this.state.currentDate.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
    });
  }

  render() {
    const clock = this.renderFormatDate();
    const { city, wind, temp } = this.state;
    return (
      <div className={styles.content}>
        <form className={styles.form} onSubmit={this.getWeather}>
          <input
            className={styles.input}
            autoComplete="off"
            type="text"
            name="city"
            placeholder="city"
          />
          <button className={styles.btn}>add City</button>
        </form>
        <div className={styles.itemsContent}>
          <div className={styles.items}>
            <div className={styles.imgCity}></div>
            <span> {city}</span>
          </div>
          <div className={styles.items}>
            <div className={styles.imgTemp}></div>
            <span> {temp}</span>
          </div>
          <div className={styles.items}>
            <div className={styles.imgWind}></div>
            <span> {wind}</span>
          </div>
        </div>
        <div className={styles.itemsContent}>
          <p>{clock}</p>
        </div>
      </div>
    );
  }
}
