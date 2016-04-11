import React from 'react';
import Navbar from './Navbar';
import AmountInput from './AmountInput';
import BalanceSheet from './BalanceSheet';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { grandTotal: 0, amountList: amounts };
    this.resetClick = this.resetClick.bind(this);
  }

  resetClick() {
    document.getElementById('amount').value = '';
    this.setState({ grandTotal: 0, amountList: [] });
  }

  render() {
    return (
      <div>
        <Navbar onReset={this.resetClick} />
        <div className="container">
          <h3>Total</h3>
          <h4>{this.props.currencySymbol}{this.state.grandTotal.toFixed(2)}</h4>
          <AmountInput currencySymbol={this.props.currencySymbol} />
          {this.state.amountList.length > 0 &&
            <BalanceSheet currencySymbol={this.props.currencySymbol} amounts={this.state.amountList} />
          }
        </div>
      </div>
    );
  }
}
App.propTypes = { currencySymbol: React.PropTypes.string.isRequired };
App.defaultProps = { currencySymbol: '$' };
