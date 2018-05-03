import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Emaily"
                description="Charge $5 for 5 survey credits"
                amount={500}
                token={token=>this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="waves-effect waves-light cyan accent-4 btn">Add Credits</button>
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(Payments);