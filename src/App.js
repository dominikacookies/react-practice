import { Component } from "react";

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
      <section>
        <div className="container">
          <h1> Hello {this.state.name}</h1> 
        </div>
        <div>
          <form onSubmit={this.generateGreeting}>
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={this.handleLengthChange}
                />
              </div>
            </div>
              <button type="submit" className="btn btn-primary">
                Generate greeting
              </button>
          </form> 
        </div>
      </section>
    )
  }
}

export default App;