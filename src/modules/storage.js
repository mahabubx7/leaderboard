/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */

import { BaseURL, ApiKey } from '../config';

export default class Store {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
  }

  static async refresh() {
    localStorage.setItem('scores', JSON.stringify([]));
    this.getScores();
  }

  static async getScores() {
    try {
      if (JSON.parse(localStorage.getItem('scores'))) {
        return JSON.parse(localStorage.getItem('scores'));
      }

      await fetch(`${BaseURL}games/${ApiKey}/scores`, {
        method: 'GET',
      })
        .then(async (res) => await res.json())
        .then((_d) => {
          const { result } = _d;
          localStorage.setItem('scores', JSON.stringify(result));
        })
        .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  }

  static async addScore(obj) {
    try {
      await fetch(`${BaseURL}games/${ApiKey}/scores`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }).then(async (res) => await res.json())
        .then((_d) => {
          console.log(_d);
          const { result } = _d;
          // update the list @localStorage
          const list = JSON.parse(localStorage.getItem('scores'));
          if (result === 'Leaderboard score created correctly.') {
            list.push(obj);
            localStorage.setItem('scores', JSON.stringify(list));
          }
        });
    } catch (err) { console.error(err); }
  }
}
