import { useReducer } from 'react';

const enum reducerAction {
  setTitle = 'setTitle',
  setDescription = 'setDescription',
}

type reducerActionType = {
  type: reducerAction;
  payload: string;
};

type stateType = {
  title: string;
  description?: string;
};

const reducer = (state: stateType, action: reducerActionType): stateType => {
  switch (action?.type) {
    case reducerAction.setTitle:
      return { ...state, title: action.payload };
    case reducerAction.setDescription:
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export const useForm = (initState: stateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: reducerAction.setTitle,
      payload: e.currentTarget.value,
    });

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: reducerAction.setDescription,
      payload: e.currentTarget.value,
    });

  const onClearTitle = () =>
    dispatch({ type: reducerAction.setTitle, payload: '' });

  const onClearDescription = () =>
    dispatch({ type: reducerAction.setDescription, payload: '' });

  return {
    state,
    onChangeTitle,
    onChangeDescription,
    onClearTitle,
    onClearDescription,
  };
};
