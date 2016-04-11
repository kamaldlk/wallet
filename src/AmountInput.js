import React from 'react';
import $ from 'jquery';

export default class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.amountChange = this.amountChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  amountChange() {
    const amount = document.getElementById('amount').value;
    if (amount === '1000000') {
      $('#one-million-dollars').modal();
    }
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
              <input type="text" className="form-control" id="amount" placeholder="Amount" onChange={this.amountChange} />
            </div>
          </div>
          <input type="button" className="btn btn-success" value="Add" onClick={this.buttonClick} />
          <input type="button" className="btn btn-danger" value="Remove" onClick={this.buttonClick} />
        </div>
        <div className="modal fade" id="one-million-dollars" tabindex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
              </div>
              <div className="modal-body">
                <img src="./assets/img/easter-egg.gif" className="center-block img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AmountInput.propTypes = { currencySymbol: React.PropTypes.string.isRequired };
