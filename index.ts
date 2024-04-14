import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: () => "HELLO WORLD!",
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.error("Error Boundary", err, info, props);
    return React.createElement('div', { className: 'root' }, 'ERROR BOUNDARY');
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
