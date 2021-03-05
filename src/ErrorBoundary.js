//code from https://reactjs.org/docs/error-boundaries.html

import React from "react"
import { Link, Redirect } from "@reach/router"

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info) //eslint-disable-line no-console
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000)
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was a n error with this listing{" "}
          <Link to="/">Back to homepage</Link>
        </h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
