import React from "react";

type Props = { fallback: React.ReactNode | ((error: Error) => React.ReactNode) };
type State = { error: null | Error };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    return error ? (typeof fallback === "function" ? fallback(error) : fallback) : children;
  }
}
