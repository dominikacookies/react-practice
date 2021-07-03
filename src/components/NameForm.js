import React from "react"

const NameForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="mb-3">
        <div>
          <input
            type="input"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Generate greeting
      </button>
    </form> 
  );
};

export default NameForm