import React from "react";
import { connect } from "react-redux";
import * as actions from "../stores/count/count_action";
const Count = (props) => {
  const { counter, increaseIt, decreaseIt, resetIt } = props;
  return (
    <div>
      <h2>Count {counter}</h2>
      <br />
      <br />
      <button onClick={() => increaseIt(3)}>Increment +3</button>
      <br />
      <br />
      <button onClick={() => decreaseIt(5)}>Decrement -5</button>
      <br />
      <br />
      <button onClick={resetIt}>Reset</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state.countReduce,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseIt: (x) => dispatch(actions.increaseCount(x)),
    decreaseIt: (x) => dispatch(actions.decreaseCount(x)),
    resetIt: () => dispatch(actions.resetCount()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Count);
