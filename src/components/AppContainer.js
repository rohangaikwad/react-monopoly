import React from "react";
import { CommonContextProvider } from "../contexts/CommonCtx";
import Board from "./board";
// import ComponentA from "./ComponentA";

const AppContainer = () => {
  return (
    <CommonContextProvider>
      <Board />
    </CommonContextProvider>
  );
};

export default AppContainer;
