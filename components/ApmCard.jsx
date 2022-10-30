import React, { Component } from 'react';

export default class ApmCard extends Component {
  constructor(props) {
    super();

    this.state = {
      btns: false,
      form: false,
      booked: false,
      target: props.indexID,
      entries: {
        name: '',
        email: '',
        phone: '',
      },
    };
    this.confirmAppointment = this.confirmAppointment.bind(this);
    this.submitApm = this.submitApm.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.testDiscord = this.testDiscord.bind(this);
  }
  confirmAppointment = event => {
    this.setState({ form: true });
  };
  handleName = event => {
    //setState shap
    this.setState({
      entries: {
        ...this.state.entries,
        name: event.target.value,
      },
    });
  };
  handleEmail = event => {
    //setState shap
    this.setState({
      entries: {
        ...this.state.entries,
        email: event.target.value,
      },
    });
  };
  handlePhone = event => {
    //setState shap
    this.setState({
      entries: {
        ...this.state.entries,
        phone: event.target.value,
      },
    });
  };

  testDiscord = () => {
    fetch(
      'https://discord.com/api/webhooks/1022189972830306395/lXCQt0OuS44MvPraWk2_bauJz7dBmYKk6b1ocE5L7TVAlweWQh6iNP1E3GOjQ-uGBbjk',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'Test results',
          avatar_url: '',
          content: `New Appointment has been set@ ${this.props.data.date} ${this.props.data.time} from: ${this.state.entries.name} ${this.state.entries.email} ${this.state.entries.phone}`,
        }),
      }
    ).then(res => {
      console.log(res);
    });
  };
  submitApm = event => {
    event.preventDefault();
    console.log(this.state.entries);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.props.data.id,
        date: this.props.data.date,
        time: this.props.data.time,
        booked: this.state.entries,
      }),
    };
    fetch(
      process.env.BACKEND_SERVER + '/apm/' + this.props.data.id,
      requestOptions
    ).then(() => {
      this.setState({ booked: true });

      this.testDiscord();
    });
  };

  render() {
    return (
      <>
        <div
          style={!this.state.booked ? { display: 'none' } : {}}
          className="alert alert-success"
          role="alert"
        >
          <h4 className="alert-heading">Booked!!</h4>
          <p>
            Your Appointment has been set @{this.props.data.date}{' '}
            {this.props.data.time}
          </p>
        </div>

        <li
          className="list-group-item"
          onMouseEnter={() => this.setState({ btns: true })}
          style={this.state.booked ? { display: 'none' } : {}}
          onMouseLeave={() => {
            this.setState({ btns: false });
            this.setState({ form: false });
          }}
        >
          <i className="fa-regular fa-calendar-check mx-2"></i>
          <label className="form-check-label">
            {this.props.data.date}
            <i className="fa-regular fa-clock mx-1"></i>
            {this.props.data.time}
          </label>
          {this.state.btns && (
            <span>
              <button
                type="button"
                className="btn btn-sm btn-success mx-1"
                onClick={this.confirmAppointment}
              >
                <i
                  className="fa-solid fa-check-double"
                  id={'b:' + this.props.indexID}
                ></i>
              </button>
            </span>
          )}
          {this.state.form && (
            <form
              onSubmit={this.submitApm}
              className="border border-warning my-3 p-3"
            >
              <div className="mb-3">
                <input
                  type="text"
                  onChange={this.handleName}
                  className="form-control"
                  placeholder="Name"
                  value={this.state.entries.name}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  value={this.state.entries.email}
                  onChange={this.handleEmail}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.entries.phone}
                  placeholder="Phone"
                  onChange={this.handlePhone}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </li>
      </>
    );
  }
}
