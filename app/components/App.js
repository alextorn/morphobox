import React from 'react';
// import SetupMorphoBox from './SetupMorphoBox';
import MorphoBox from './MorphoBox';

function App(props) {
  return (
    <div className="client_container">
      <div className="page_wrap">
        <div className="toppanel">
          <h1>Morphobox</h1>
        </div>
        <div className="page_content">
          <div className="p_content">
            <MorphoBox />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
