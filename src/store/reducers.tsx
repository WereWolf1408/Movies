type actionProps = {
  type: string;
  data: any;
};

const initialState = {
  items: [''],
};

export const rootReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case 'GET_DATA':
      const { data: items } = action;
      return { ...state, items };
    case 'SORT_DATA':
      console.log(`-----> RootReduce SORT case`);
      return { ...state };
    default:
      return state;
  }
};
