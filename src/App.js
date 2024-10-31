// Import required UI5 Web Components
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/Dialog.js';
import '@ui5/webcomponents/dist/Select.js';
import '@ui5/webcomponents/dist/Option.js';
import '@ui5/webcomponents/dist/SegmentedButton.js';
import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      {/* Page Title */}
      <ui5-title level="H1">REPO PAGE</ui5-title>

      {/* Search Repositories Input */}
      <ui5-input id="repo-search" placeholder="Enter repo name"></ui5-input>

      {/* Open Modal Button */}
      <ui5-button onClick={() => setModalOpen(true)}>Open Modal</ui5-button>

      {/* Modal for Repository Info */}
      {isModalOpen && (
        <ui5-dialog
          open
          header-text="Repository Info"
          onAfterClose={() => setModalOpen(false)}
        >
          <div>This is an overlay to show repository details.</div>
          <div slot="footer">
            <ui5-button design="Emphasized" onClick={() => setModalOpen(false)}>
              Close
            </ui5-button>
          </div>
        </ui5-dialog>
      )}

      {/* Dropdown for Selecting Option */}
      <ui5-select id="dropdown" accessible-name="Select Option">
        <ui5-option text="Option 1"></ui5-option>
        <ui5-option text="Option 2"></ui5-option>
        <ui5-option text="Option 3"></ui5-option>
      </ui5-select>

      {/* Content Switcher */}
      <ui5-segmented-button>
        <ui5-segmented-button-item text="First" />
        <ui5-segmented-button-item text="Second" />
        <ui5-segmented-button-item text="Third" />
      </ui5-segmented-button>
    </div>
  );
}
