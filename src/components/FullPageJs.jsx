import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '../css/test.css';

const FullPageJs = () => (

  <ReactFullpage 
  // ReactFullpage props
  navigation
  sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
  scrollingSpeed={2000}
  render = {({state, fullpageApi}) => {
    return (
      <>
      <ReactFullpage.Wrapper>
      <div className="section">
  
      </div>
      <div className="section">
  
      </div>
      <div className="section">
  
      </div>
      </ReactFullpage.Wrapper>
      </>
    );
  }}
  />
)

export default FullPageJs;





