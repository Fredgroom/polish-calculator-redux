import { Actions } from '../actions/actions';

const initialState = {
  result: 0,
  stack: [],
  currentNumber: null,
  enterNewNumber: true,
  editingMantissa: false,
  mantissaIndex: 1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_NUMBER: {
      let currentNumber = action.payload;

      if (!state.editingMantissa) {
        // new current number
        if (state.currentNumber === null || state.enterNewNumber) {
          return {
            ...state,
            currentNumber,
            enterNewNumber: false
          };
        } else {
          currentNumber = state.currentNumber * 10 + currentNumber;
          // adding to existing number
          return {
            ...state,
            currentNumber
          };
        }
      } else {
        currentNumber = Math.pow(10, -state.mantissaIndex) * Number(action.payload).toFixed();
        // new current number
        if (state.currentNumber === null || state.enterNewNumber) {
          return {
            ...state,
            currentNumber,
            enterNewNumber: false,
            mantissaIndex: state.mantissaIndex + 1
          };
        } else {
          currentNumber = state.currentNumber + currentNumber;
          // adding to existing number
          return {
            ...state,
            currentNumber,
            mantissaIndex: state.mantissaIndex + 1
          };
        }
      }
    }
    case Actions.ENTER: {
      const newStack = [...state.stack];
      newStack.push(state.currentNumber);
      return {
        ...state,
        stack: newStack,
        enterNewNumber: true,
        editingMantissa: false,
        mantissaIndex: 1
      };
    }
    case Actions.ADD_DOT: {
      return {
        ...state,
        editingMantissa: true
      };
    }
    case Actions.ADDITION: {
      const newStack = [...state.stack];
      const a = newStack.pop() || 0;
      const b = newStack.pop() || 0;
      const result = a + b;
      newStack.push(result);
      return {
        ...state,
        result: result,
        stack: newStack
      };
    }
    case Actions.SUBTRACTION: {
      const newStack = [...state.stack];
      const a = newStack.pop() || 0;
      const b = newStack.pop() || 0;
      const result = b - a;
      newStack.push(result);
      return {
        ...state,
        result: result,
        stack: newStack
      };
    }
    case Actions.MULTIPLICATION: {
      const newStack = [...state.stack];
      const a = newStack.pop() || 0;
      const b = newStack.pop() || 0;
      const result = b * a;
      newStack.push(result);
      return {
        ...state,
        result: result,
        stack: newStack
      };
    }
    case Actions.DIVISION: {
      const newStack = [...state.stack];
      const a = newStack.pop() || 0;
      const b = newStack.pop() || 0;
      const result = b / a;
      newStack.push(result);
      return {
        ...state,
        result: result,
        stack: newStack
      };
    }
    case Actions.CLEAR: {
      return initialState;
    }
    case Actions.CHANGE_SIGN: {
      return {
        ...state,
        currentNumber: state.currentNumber * -1
      };
    }
    case Actions.SQUARE: {
      const newStack = [...state.stack];
      const a = newStack.pop() || 0;
      const result = a * a;
      newStack.push(result);
      return {
        ...state,
        result: result,
        stack: newStack
      };
    }

    case Actions.SQUARE_ROOT: {
      const newStack = [...state.stack];
      const a = newStack.pop() || 0;
      const result = Math.pow(a, 0.5);
      newStack.push(result);
      return {
        ...state,
        result: result,
        stack: newStack
      };
    }
    default: {
      return state;
    }
  }
};
