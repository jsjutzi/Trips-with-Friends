import React from "react";

import "./App.css";

import router from "./router.js";

export function App({ children }) {
  return <div className="app">{router}</div>;
}

export default App;
