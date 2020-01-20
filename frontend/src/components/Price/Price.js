import React, { Component } from 'react';
import './Price.css';

class Price extends Component {
//Recive por props todos los parametros y renderiza.
  render() {
    return (
      <div className="preciobox">
        <span className="valorventa">${ this.props.price }</span>
          { this.props.discount > 0 && 
            <React.Fragment> 
              <div className="precio">${ this.props.list_price }</div>
               <span className="valorreal">
                 <span className="descuento">{ this.props.discount }% OFF</span>
               </span>
            </React.Fragment>
          }
      </div>
    );
  }
}

export default Price;

