import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Footer, Header} from "../components"
import Dashboard from "../containers/Dashboard"

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
