import React, { Component } from 'react'
import dai from '../dai.png'

import { Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      redirect: null
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    const balance = window.web3.utils.fromWei(this.props.stakingBalance, 'Ether');
    const halfprice = balance * 100 / this.props.price;
    let content
    if (halfprice >= 100) {
      if (this.state.show) {
        this.setState({ show: false })
      }
      content = null
    } else if (halfprice == 0) {
      content = null
    } else {
      content = null
    }
    return (
      <div id="content" className="mt-3" >


        <div className="card mb-4" >
          {
            <div className="card-body">
              {content}
              <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.props.price.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
                <div>
                  <label className="float-left"><b>Price: {this.props.price} mDAI</b></label>
                  <span className="float-right text-muted">
                    Wallet Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')} mDAI
                </span>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg">Pay It All({this.props.price - balance} mDAI)!</button>
              </form>

              <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)

              }}>

                <div className="input-group mb-4">
                  <input
                    type="text"
                    ref={(input) => { this.input = input }}
                    className="form-control form-control-lg"
                    placeholder="0"
                    required />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <img src={dai} height='32' alt="" />
                    &nbsp;&nbsp;&nbsp; mDAI
                  </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Put Money in Your Loan</button>
              </form>


              <button
                type="submit"
                className="btn btn-link btn-block btn-sm"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.unstakeTokens()
                  console.log(123798172498712)
                }}>
                UN-STAKE...
              </button>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: `${halfprice}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax={this.props.price}></div>
              </div>
            </div>}
        </div>

      </div>
    );
  }
}

export default Main;
