import Head from 'next/head';
import React, { Component } from 'react';
import ApmCard from '../components/ApmCard';
import ApmList from '../components/ApmList';
const serverURL = 'http://localhost:5000';
export default class index extends Component {
  render() {
    return (
      <div className="container p-4 mx-auto">
        <h1>Select date and time to book an appointment.</h1>
        <hr />
        <ApmList serverURL={serverURL} />
      </div>
    );
  }
}
