//Actions

export const Actions = {
  ADDITION: 'ADDITION',
  SUBTRACTION: 'SUBTRACTION',
  DIVISION: 'DIVISION',
  MULTIPLICATION: 'MULTIPLICATION',
  ADD_NUMBER: 'ADD_NUMBER',
  ENTER: 'ENTER',
  ADD_DOT: 'ADD_DOT',
  CLEAR: 'CLEAR',
  CHANGE_SIGN: 'CHANGE_SIGN',
  SQUARE: 'SQUARE',
  SQUARE_ROOT: 'SQUARE_ROOT'
};

//Action Creators
export const doAddition = () => ({
  type: Actions.ADDITION
});

export const doSubtraction = () => ({
  type: Actions.SUBTRACTION
});

export const doDivision = () => ({
  type: Actions.DIVISION
});

export const doMultiplication = () => ({
  type: Actions.MULTIPLICATION
});

export const addNumber = number => ({
  type: Actions.ADD_NUMBER,
  payload: number
});

export const doEnter = () => ({
  type: Actions.ENTER
});

export const addDot = () => ({
  type: Actions.ADD_DOT
});

export const doClear = () => ({
  type: Actions.CLEAR
});

export const changeSign = () => ({
  type: Actions.CHANGE_SIGN
});

export const doSquare = () => ({
  type: Actions.SQUARE
});

export const doSquareRoot = () => ({
  type: Actions.SQUARE_ROOT
});
/* 
mapDispatchToProps = (dispatch) => {
  handleAdd: () => {dispatch(doAddition())}
}

[{
  text: "+",
  action: () => {handleAdd()}
}]

<Button onClick={operator.action} text={operator.text} />
*/
