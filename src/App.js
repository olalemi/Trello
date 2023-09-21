import React, { Fragment } from "react";
import Board from "./component/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </Fragment>
  );
}

export default App;
