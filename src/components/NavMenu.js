import React, { Component } from "react";
import { connect } from "react-redux";

class NavMenu extends Component {
  handleAdd=(e)=>{
    e.preventDefault();
    this.props.formatForm();
    this.props.openForm();
  };
  handeHome=(e)=>{
    e.preventDefault();
    this.props.openForm();
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark mb-4"
        style={{backgroundColor:'black'}}
      >
        <a className="navbar-brand" href="#">
          DTT
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={(event)=>this.handeHome(event)}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(event)=>this.handleAdd(event)}>
                Thêm ghi chú
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openForm: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
    formatForm: () => {
      dispatch({ type: "FORMAT_FORM" });
    },
  }
}
export default connect(null, mapDispatchToProps)(NavMenu);