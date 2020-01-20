import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Btn.css';

export class Btn extends Component {
  render() {
    return (
      <div>
          <Link to={this.props.to}>
            <div className="btnBlue">
              <span>{this.props.body}</span>
            </div>
          </Link>
      </div>
    );
  }
}

export default Btn;
