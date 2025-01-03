import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary: ", error);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-red-500">Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
