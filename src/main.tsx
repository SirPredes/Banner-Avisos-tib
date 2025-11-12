import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

class WebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

const ELEMENT_NAME = 'banner-avisos-tib';

if (customElements.get(ELEMENT_NAME)) {
  console.log(`Skipping registration for <${ELEMENT_NAME}> (already registered)`);
} else {
  customElements.define(ELEMENT_NAME, WebComponent);
}
``
