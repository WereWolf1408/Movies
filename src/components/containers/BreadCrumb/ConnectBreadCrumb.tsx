import React from 'react';
import { connect } from 'react-redux';
import { MapDispatchProps } from '../../../utils/interfaces';
import { BreadCrumb } from './BreadCrumb';
import { applySort } from '../../../store/actions';

const mapDispatchToProps: MapDispatchProps<
  {},
  { applySortCallback: (value: string) => void }
> = (dispatch) => {
  return {
    applySortCallback: (sortValue: string) => dispatch(applySort(sortValue)),
  };
};

export default connect(null, mapDispatchToProps)(BreadCrumb);
