import { connect } from 'react-redux';
import { MapDispatchProps, MapStateProps } from './utils/interfaces';
import { fetchData } from './store/actions';
import { App } from './App';

const mapStateToProps: MapStateProps<{}, { store: Array<string> }> = (state) => {
  return { store: state.items };
};

const mapDispatchToProps: MapDispatchProps<{}, { fetchData: () => void }> = (
  dispatch
) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
