import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Footer, Header} from "../components"
import {Cart, Dashboard, Signin, Signup} from "../containers"

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
