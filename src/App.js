import React, { Fragment } from "react";
import Board from "./component/Board";
import { DndProvider } from "react-dnd"; // Import DndProvider from 'react-dnd' instead of 'react-dnd-html5-backend'
import { HTML5Backend } from "react-dnd-html5-backend"; // Import HTML5Backend from 'react-dnd-html5-backend'


function App() {
  return (
    <Fragment>
 
      {/* Wrap the board with the DndProvider */}
      <DndProvider backend={HTML5Backend}>
      <Board />
      </DndProvider>

    </Fragment>
  );
}

export default App;
