import React, { ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryProps> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

	//depricated
  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
