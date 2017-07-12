import * as React from 'react';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export interface Props {
  name: string;
  enthusiasm?: any;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name = 'chen',  enthusiasm , onIncrement, onDecrement }: Props) {
  let enthusiasmLevel = enthusiasm.enthusiasmLevel;
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export function mapStateToProps({ enthusiasm, languageName }: StoreState) {
  return {
    enthusiasm,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);