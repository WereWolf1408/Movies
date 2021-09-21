import React from 'react';

interface BuggyCounterState {
  showError: boolean;
}

export class BuggyCounter extends React.Component<{}, BuggyCounterState> {
  constructor(props: unknown) {
    super(props);
    this.state = { showError: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showError: true });
  }

  render() {
    if (this.state.showError) {
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>Click to trigger Error</h1>;
  }
}
