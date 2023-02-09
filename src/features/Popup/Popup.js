import React from "react";
import ReactDOM from "react-dom";
import './Popup.css'

const Popup = ({ isVisible, closeFunction }) => {
  let resComponent = null;

  if (isVisible) {
    resComponent = <React.Fragment>
      {ReactDOM.createPortal((
        <div className="popup-overlay">
        </div>
      ), document.getElementById('overlay-root'))}
      {ReactDOM.createPortal((
        <div className="popup-container" onClick={closeFunction}>
          <div className="popup-modal" onClick={(event) => event.stopPropagation()}>
            <div className="header">Hello!</div>
            <div className="body">Welcome To the application</div>
            <div className="footer">
              <button onClick={closeFunction}>Close</button>
            </div>
          </div>
        </div>
      ), document.getElementById('popup-root'))}
    </React.Fragment>
  }

  return resComponent;
};

export default Popup;