import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Pages from './Pages/Pages';
import "./Pages/app.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  )
}

export default App;
