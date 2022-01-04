import React from "react"
import { Route, Switch } from "react-router-dom"
import TopCounter from "./components/TopCounter"
import IframeCounter from "./components/IframeCounter"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <section className="top">
            <div style={{ width: "40%" }}>
              <TopCounter />
            </div>
            <iframe
              style={{ width: "40%" }}
              src="/iframe"
              title="test"
              frameBorder="0"
            ></iframe>
          </section>
        </Route>
        <Route path="/iframe" exact>
          <IframeCounter />
        </Route>
      </Switch>
    </div>
  )
}

export default App
