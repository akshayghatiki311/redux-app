import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

const Transaction = () => {
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators,dispatch);
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Buy G-Shock</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        Withdraw
      </button>
      Update Balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        Deposit
      </button>
      {/*<button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}}>Withdraw</button>
        Update Balance
  <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>Deposit</button>*/}
      {/*<button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>Withdraw</button>
        Update Balance
  <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>Deposit</button>*/}
    </div>
  );
};

export default Transaction;
