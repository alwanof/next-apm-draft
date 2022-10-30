import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import ApmCard from './ApmCard';

export default class ApmList extends Component {
  constructor(props) {
    super();
    let today = new Date();
    today.setDate(today.getDate() + 1);
    today = this.convertDate(today);
    const aURL = props.serverURL + '/apm?booked=false&date_gte=' + today;
    this.state = {
      cards: [],
      url: aURL,
    };
  }
  convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return (
      yyyy +
      '-' +
      (mmChars[1] ? mm : '0' + mmChars[0]) +
      '-' +
      (ddChars[1] ? dd : '0' + ddChars[0])
    );
  }

  // validate prpos
  static propTypes = {
    serverURL: PropTypes.string.isRequired,
  };

  async componentDidMount() {
    const res = await fetch(this.state.url);
    const cards = await res.json();
    this.setState({ cards });
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.cards.map((item, index) => (
          <ApmCard data={item} indexID={item.id} key={item.id} />
        ))}
      </ul>
    );
  }
}
