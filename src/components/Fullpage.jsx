import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    scrollingSpeed = {800} /* Options here */
    parallax = {true}

    render={({ state, fullpageApi }) => {
      return (
        
        <ReactFullpage.Wrapper>
          <div className="section">
            
            </div>
            <div className="section">

            </div>
            <div className="section">
             
            </div>
            </ReactFullpage.Wrapper>
       
      );
    }}
  />
);

export default Fullpage;