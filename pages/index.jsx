import Head from 'next/head';
import Image from 'next/image';
import React, { Component } from 'react';
import ApmCard from '../components/ApmCard';
import ApmList from '../components/ApmList';
export default class index extends Component {
  render() {
    return (
      <div className="container-4 m-3">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto border border-warning p-0">
            <div className="border-bottom border-white">
              <picture>
                <source srcSet={'images/cover.jpg'} type="image/jpeg" />
                <img
                  src={'images/cover.jpg'}
                  alt="Landscape picture"
                  className="img-fluid"
                />
              </picture>
            </div>
            <div className="p-3">
              <h5 className="mt-3 text-center">
                Select the date and time for scheduling a <b>Zoom</b> session
              </h5>

              <ApmList />
            </div>
            <hr />
            <p className="text-sm text-center">Please do not be late!</p>
          </div>
        </div>
      </div>
    );
  }
}
