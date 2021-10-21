import { actions } from '@utils/utils';

interface ActionProps<K> {
  (data: K): {
    type: string;
    data: K;
  };
}

export const getData: ActionProps<Array<string>> = (data) => ({
  type: actions.GET_DATA,
  data,
});

export const fetchData = () => (dispatch: any) => {
  console.log('fetch data function called');
  setTimeout(() => {
    dispatch(getData(['111111']));
  }, 1000);
};

export const applySort = (sortValue: string) => (dispatch: any) => {
  console.log(`-----> APPLY SORT FUNCTION WAS CELLED`);
  console.log(`sort field = ${sortValue}`);
  dispatch(getData(['111111', '222222', '33333']));
};
