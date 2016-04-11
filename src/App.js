import React from 'react';
import Navbar from './Navbar';
import AmountInput from './AmountInput';
import BalanceSheet from './BalanceSheet';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { grandTotal: 0, amountList: amounts };
    this.resetClick = this.resetClick.bind(this);
    this.addLine = this.addLine.bind(this);
  }

  resetClick() {
    document.getElementById('amount').value = '';
    this.setState({ grandTotal: 0, amountList: [] });
  }

  addLine(line) {
    // check if the new total will be > 0 first
    let total = 0;
    if (line.type === 'Credit') {
      total = this.state.grandTotal + line.amount;
    } else if (line.type === 'Debit') {
      total = this.state.grandTotal - line.amount;
    }
    if (total >= 0) {
      // clone the amountList so we don't mutate state
      const amounts = Array.from(this.state.amountList);

      // add a unique key (the index) so we can render the lines as React children
      // as well as the Date and new total
      const newLine = Object.assign({}, line);
      newLine.key = amounts.length;
      newLine.date = new Date().toDateString();
      newLine.balance = total;

      amounts.push(newLine);
      this.setState({ grandTotal: total, amountList: amounts });
    }
  }

  render() {
    return (
      <div>
        <Navbar onReset={this.resetClick} />
        <div className="container">
          <h3>Total</h3>
          <h4>{this.props.currencySymbol}{this.state.grandTotal.toFixed(2)}</h4>
          <AmountInput currencySymbol={this.props.currencySymbol} addLine={this.addLine} />
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
