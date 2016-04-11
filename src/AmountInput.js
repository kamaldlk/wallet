import React from 'react';

export default class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    let amountFloat = parseFloat(document.getElementById('amount').value);
    const button = e.currentTarget.value;
    console.log(amountFloat);
    console.log(button);
  }

  render() {
    return (
      <div>
        <div role="form" className="form-inline">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">{this.props.currencySymbol}</div>
              <input type="text" className="form-control" id="amount" placeholder="Amount" />
            </div>
          </div>
          <input type="button" className="btn btn-success" value="Add" onClick={this.buttonClick} />
          <input type="button" className="btn btn-danger" value="Remove" onClick={this.buttonClick} />
        </div>
      </div>
    );
  }
}
AmountInput.propTypes = { currencySymbol: React.PropTypes.string.isRequired };
