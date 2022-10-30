import Head from 'next/head';
import React, { Component } from 'react';
import ApmCard from '../components/ApmCard';
import ApmList from '../components/ApmList';

export default class index extends Component {
  render() {
    return (
      <div className="container p-4 mx-auto">
        <h1>Select date and time to book an appointment.</h1>
        <hr />
        <ApmList />
      </div>
    );
  }
}
