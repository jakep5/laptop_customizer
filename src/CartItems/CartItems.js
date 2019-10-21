import React from 'react'
import '../App.css';


class CartItems extends React.Component {
    render() {
        Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
          return ( 
            <div className="summary__option" key={this.props.featureHash}>
              <div className="summary__option__label">{this.props.feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
              </div>
            </div>
          );
        });
    }
}

export default CartItems