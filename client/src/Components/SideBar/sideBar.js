import React from 'react';
import "../../../src/App.css"
function Sidebar() {
  const elements = [];

  for (let i = 0; i < 7; i++) {
    elements.push(<div className='element' key={i}></div>);
  }

  const boxViews = [];

  for (let i = 0; i < 5; i++) {
    boxViews.push(
      <div className='boxView' key={i}>
        <div className='elementOne'></div>
        <div className='elementTwo'></div>
      </div>
    );
  }

  return (
    <div className='mainContainer'>
      <div id='container'>
        <div className='element first'></div>
        <hr color='#3c3f44' />
        {elements}
      </div>

      <div id='containerTwo'>
        <div style={{ margin: '8px' }}>
          {boxViews}

          <div style={{ paddingTop: '20px', margin: '5px' }}>
            <div className='elementTwo'></div>
          </div>

          {boxViews}

          <div style={{ paddingTop: '23px', margin: '5px' }}>
            <div className='elementTwo'></div>
          </div>

          {boxViews.slice(0, 3)}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
