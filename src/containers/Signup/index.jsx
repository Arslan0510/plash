import React, {Component} from "react"
import {connect} from "react-redux"
import logo from "../../assets/bootstrap-logo.svg"
import {addUser, getUser} from "../../store/actions"

export class Signup extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password, userName} = this.state
    // addUser({email, password, userName})
    const user = getUser()
    console.log("get User", user)
  }
  render() {
    return (
      <main class="form-signin">
        <form onSubmit={this.handleSubmit}>
          <img class="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
          <label for="userName" class="visually-hidden">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            class="form-control"
            placeholder="User Name"
            value={this.state.userName}
            onChange={(e) => this.setState({userName: e.target.value})}
            required
            autofocus
          />
          <label for="inputEmail" class="visually-hidden">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
            required
          />
          <label for="inputPassword" class="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
        <h2>{this.props.addUser.email}</h2>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addUser: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: () => dispatch(addUser()),
  }
}

export default connect(mapStateToProps, {getUser})(Signup)
