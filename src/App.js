import { Component } from "react";

import NameForm from "./components/NameForm"



class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      name: "Friend"
    }
  }

  generateGreeting = (event) => {
    event.preventDefault()
    
    this.setState({
      name: document.getElementById("name").value
    })

  }

  render() {
    return (
      <section className="main-container">
        <div className="content">
          <h1> Hello {this.state.name}</h1> 
          <NameForm onSubmit= {this.generateGreeting} />
        </div>
      </section>
    )
  }
}

export default App;