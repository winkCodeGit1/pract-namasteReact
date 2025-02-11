import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "At-Kuansh,PO-Bhadrak,PS-Bhadrak,pin-756100",
      count: 0,
      userIfo: {
        name: "",
        location: "",
        company: "",
      },
    };

    console.log(this.props.name + " constructor Child");
  }


  //we can write async in componentDidMount but we can't write async in useeffect
  async componentDidMount(prevProps, prevState) {
    console.log();

    console.log(
      this.props.name +
        "componentDidMount render menthod after component mount successfull"
    );
    const data = await fetch("https://api.github.com/users/winkCodeGit1");
    const json = await data.json();
    console.log(json, "------json");
    this.setState({
      userIfo: {
        name: json.name,
        location: json.location,
        company: json.company,
      },
    });
  }

  componentDidUpdate() {
    console.log(
      this.props.name +
        "componentDidUpdate render menthod after component mount successfull and change in the update like this.setstate"
    );
  }

  render() {
    console.log(this.props.name + "render Child render");

    const { name, email } = this.props;
    const { address, count } = this.state;
    return (
      <>
        <div className="card">
          <h1>Count: - {count}</h1>
          <button
            onClick={() =>
              //Never update state variable directly
              this.setState({
                count: this.state.count + 1,
              })
            }
          >
            Click Me
          </button>
          <p>Name:- {name}</p>
          <p>Address:- {address}</p>
          <p>Email Id:- {email}</p>
          <h3>Github name :{this.state.userIfo.name}</h3>
          <h3>Location name :{this.state.userIfo.Location}</h3>
          <h3>company name :{this.state.userIfo.company}</h3>
        </div>
      </>
    );
  }
}

export default UserClass;
