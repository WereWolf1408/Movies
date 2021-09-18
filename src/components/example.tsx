import React from 'react';

export class Example extends React.Component<{}, { value: string }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      value: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log('click handler');
    /**@ts-ignore */
    // this.state.value = '123123';
    this.setState({
      value: '123123',
    });
  }

  render() {
    return (
      <div>
        {console.log('re-redner')}
        <h1>{this.state.value}</h1>
        <button onClick={this.clickHandler}>Change State</button>
      </div>
    );
  }
}

export class Example1 extends React.PureComponent<{}, { value: string }> {
    constructor(props: unknown) {
      super(props);
      this.state = {
        value: '',
      };
      this.clickHandler = this.clickHandler.bind(this);
    }
  
    clickHandler() {
      console.log('click handler');
      /**@ts-ignore */
    //   this.state.value = '123123';
    //   this.setState({})
      this.setState({
        value: '123123',
      });
    }
  
    render() {
      return (
        <div>
          {console.log('re-redner')}
          <h1>{this.state.value}</h1>
          <span>Pure Component</span>
          <button onClick={this.clickHandler}>Change State</button>
        </div>
      );
    }
  }
