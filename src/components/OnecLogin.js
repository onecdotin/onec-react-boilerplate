import React from "react";
import Button from "react-bootstrap/Button";
import Onec from "onec-sdk";

class OnecLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        userAddress: "",
      };
    }
    render() {
      return (
        <div>
            {this.state.isLoggedIn==false ? 
          <Button variant="primary" onClick={
            () => { 
                Onec.auth.withMetamask().then((response) => {
                    this.setState({isLoggedIn: true, userAddress: response.user.address});
                    console.log(response)
                }).catch((error) => {console.log(error)});
            }
          }>Login with Metamask</Button>:null}
        <div>
            {this.state.isLoggedIn ? <div><h3>Login Successful</h3> <p>User Address: {this.state.userAddress}</p></div> : null}
        </div>
        </div>

      );
    }
  }

  export default OnecLogin;
  