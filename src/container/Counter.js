import React from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterControlPanel from "../component/counter/CounterControlPanel";
import { connect } from 'react-redux'
import { actionTypes } from "../store/actionTypes";
import CounterList from "../component/counter/CounterList";
import ButtonRecord from "../component/counter/ButtonRecord";

function Counter(props) {

  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterControlPanel
        text="Increase"
        change={props.increase}
      />
      <CounterControlPanel
        text="Decrease"
        change={props.decrease}
      />
      <CounterControlPanel
        text="Reset"
        change={props.reset}
      />
      <CounterControlPanel
        text="Plus"
        change={props.plus}
      />
      <CounterControlPanel
        text="Minus"
        change={props.minus}
      />
      <ButtonRecord/>
      <CounterList/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    minus: () => dispatch({ type: actionTypes.MINUS, value: 20 }),
    plus: () => dispatch({ type: actionTypes.PLUS, value: 20 }),
    reset: () => dispatch({ type: actionTypes.RESET })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);