import React, {Component} from "react"
import {connect} from "react-redux"
import logo from "../../assets/bootstrap-logo.svg"
import {addUser, getUser} from "../../store/actions"

class Signup extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password, userName} = this.state
    this.props.addUser(email, password, userName)
  }
  render() {
    return (
      <main className="form-signin">
        <form onSubmit={this.handleSubmit}>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <label htmlFor="userName" className="visually-hidden">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            className="form-control"
            placeholder="User Name"
            value={this.state.userName}
            onChange={(e) => this.setState({userName: e.target.value})}
            required
            autoFocus
          />
          <label htmlFor="inputEmail" className="visually-hidden">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
            required
          />
          <label htmlFor="inputPassword" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addUser: state,
  }
}

export default connect(mapStateToProps, {addUser, getUser})(Signup)
