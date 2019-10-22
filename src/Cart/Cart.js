import React from 'react'
import CartItems from '../CartItems/CartItems';
import CartTotal from '../CartTotal/CartTotal';
import '../App.css';

class Cart extends React.Component {
    render() {
        return (
            <section className = "main_summary">
                <h2>Your cart</h2>
                <CartItems
                    featureS = {this.props.featureS}
                    selected={this.props.selected}
                />
                <CartTotal 
                    total={this.props.total}
                />
            </section>
        )
    }
}

export default Cart 