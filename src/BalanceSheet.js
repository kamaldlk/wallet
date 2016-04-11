import React from 'react';

const BalanceSheet = (props) =>
  <table className="table">
    <thead>
      <tr>
        <th>Amount</th>
        <th>Date</th>
        <th>Type</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      {props.amounts.map(line =>
        <tr key={line.key} className={line.type === 'Credit' ? 'success' : 'danger'}>
          <td>{props.currencySymbol}{line.amount.toFixed(2)}</td>
          <td>{line.date}</td>
          <td>{line.type}</td>
          <td>{props.currencySymbol}{line.balance.toFixed(2)}</td>
        </tr>)
      }
    </tbody>
  </table>;
BalanceSheet.propTypes = {
  currencySymbol: React.PropTypes.string.isRequired,
  amounts: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.number,
    amount: React.PropTypes.number,
    date: React.PropTypes.string,
    type: React.PropTypes.string,
    balance: React.PropTypes.number,
  }).isRequired),
};
BalanceSheet.defaultProps = { currencySymbol: '$', amounts: [] };

export default BalanceSheet;
