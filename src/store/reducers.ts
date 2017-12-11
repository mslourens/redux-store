import { ADD_TODO, REMOVE_TODO } from "./actions";

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "eat pizza", complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case ADD_TODO:
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data
      };

    case REMOVE_TODO:
      const newData = state.data.filter(
        _todo => action.payload.label !== _todo.label
      );
      return {
        ...state,
        data: newData
      };
  }

  return state;
}
