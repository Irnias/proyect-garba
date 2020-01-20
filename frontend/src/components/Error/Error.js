import React, { Component } from 'react';
import Btn from '../Btn/Btn';
import './Error.css';

export class Error extends Component {
  render() {
    return (
      <div>
        <div className="Error">
          <h2>{this.props.error}</h2>
          <Btn to="" body={this.props.body} />
        </div>
      </div>
    );
  }
}

export default Error;
