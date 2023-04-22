import Logo from './images/logo.svg';
import data from './data.json';

import './App.css';

function App() {
  const getCurrentDay = () => {
    let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    let day = new Date();
    return days[day.getDay()];
  };

  const currentDay = getCurrentDay();

  const createChart = (currentDay) => {
    return data.map((data) => {
      if (data.day === currentDay) {
        return (
          <tr
            className="bar-el"
            key={data.day}
          >
            <th
              scope="row"
              className="label"
            >
              {data.day}
            </th>
            <td
              style={{ ['--size']: `calc(${data.amount} / 100)` }}
              className="current-day bar"
            >
              <span className="data">${data.amount}</span>
            </td>
          </tr>
        );
      } else {
        return (
          <tr
            className="bar-el"
            key={data.day}
          >
            <th
              scope="row"
              className="label"
            >
              {data.day}
            </th>
            <td
              style={{ ['--size']: `calc(${data.amount} / 100)` }}
              className="bar"
            >
              <span className="data">${data.amount}</span>
            </td>
          </tr>
        );
      }
    });
  };

  return (
    <div className="container__app">
      <header className="container__header">
        <div className="header__text">
          <p>My Balance</p>
          <p>$921.48</p>
        </div>
        <img
          src={Logo}
          className="header__logo"
        />
      </header>

      <main className="container__main">
        <div className="container__chart">
          <table className="chart charts-css column data-spacing-6 show-heading show-data-on-hover show-labels">
            <caption>Spending - Last 7 days</caption>
            <tbody className="chart-el">{createChart(currentDay)}</tbody>
          </table>
        </div>

        <hr />

        <footer className="container__footer">
          <div className="left__footer__text">
            <p>Total this month</p>
            <p>$478.33</p>
          </div>
          <div className="right__footer__text">
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
