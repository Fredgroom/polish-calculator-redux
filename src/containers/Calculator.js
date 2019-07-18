import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/Button';
import {
  doAddition,
  doSubtraction,
  doDivision,
  doMultiplication,
  doEnter,
  addNumber,
  addDot,
  doClear,
  changeSign,
  doSquare,
  doSquareRoot
} from '../redux/actions/actions';

const Calculator = props => {
  const numbersArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operatorsArray = [
    {
      text: '*',
      action: props.handleMultiplication
    },
    {
      text: '/',
      action: props.handleDivision
    },
    {
      text: '+',
      action: props.handleAddition
    },
    {
      text: '-',
      action: props.handleSubtraction
    },
    {
      text: 'ENTER',
      action: props.handleEnter
    },
    {
      text: 'C',
      action: props.handleClear
    },
    {
      text: 'CHS',
      action: props.handleChangeSign
    },
    {
      text: 'SQUARE',
      action: props.handleSquare
    },
    {
      text: 'ROOT',
      action: props.handleSquareRoot
    }
  ];

  return (
    <React.Fragment>
      <p>{props.result}</p>
      {numbersArray.map(valKilmer => (
        <Button
          onCluck={() => {
            console.log(props.handleNumber(valKilmer));
          }}
          text={valKilmer}
        />
      ))}
      <Button text="." onCluck={props.handleAddDot} />
      {operatorsArray.map(operator => (
        <Button
          onCluck={() => {
            console.log(operator.action());
          }}
          text={operator.text}
        />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  result: state.enterNewNumber ? state.result : state.currentNumber
});

const mapDispatchToProps = dispatch => ({
  handleAddition: () => {
    return dispatch(doAddition());
  },
  handleSubtraction: () => {
    return dispatch(doSubtraction());
  },
  handleMultiplication: () => {
    return dispatch(doMultiplication());
  },
  handleDivision: () => {
    return dispatch(doDivision());
  },
  handleEnter: () => {
    return dispatch(doEnter());
  },
  handleNumber: number => {
    return dispatch(addNumber(number));
  },
  handleAddDot: () => {
    return dispatch(addDot());
  },
  handleClear: () => {
    return dispatch(doClear());
  },
  handleChangeSign: () => {
    return dispatch(changeSign());
  },
  handleSquare: () => {
    return dispatch(doSquare());
  },
  handleSquareRoot: () => {
    return dispatch(doSquareRoot());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
