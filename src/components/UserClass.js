import { count } from "console";
import React from "react";
// class based constructors, ref video ep8 18:00(https://courses.namastedev.com/learn/home/Namaste-React/section/333613/lesson/2352801?)

// notes: life cycle for class based components are constructor->render->componentsDidMount, (hence all hte api calls are made in componentDidMount)
// if its nested it will be parent constructor->parent render-> child constructors -> child render-> child componentDidMount->parent componentsDidMount

class UserClass extends React.Component {
  constructor(props) {
    // super(props) is required because the parent constructor sets this.props
    super(props);

    // in class based components state is a big object which contains all the state variables.
    this.state = {
      //note: state variables should not be updated directly as this.state.count += 1
      userInfo: {
        name: "John Doe",
        location: "Apple seed",
        contact: "john@appleseed.com",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rasi5050");
    const json = await data.json();
    console.log(json);
    console.log("this should be after json");
    const { name, location, blog } = json;
    this.setState({
      userInfo: {
        name: name,
        location: location,
        contact: blog,
      },
    });
  }
  render() {
    const { name, location, contact } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
