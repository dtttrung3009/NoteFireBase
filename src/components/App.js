import React, { Component } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import "../App.css";
import { connect } from "react-redux";
import NavMenu from "./NavMenu";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";

class App extends Component {
  showForm = () => {
    if (this.props.isEdit) return <NoteForm />;
  };
  render() {
    return (
      <div>
        <ToastContainer/>
        <NavMenu />
        <div className="container">
          <div className="row">
            <NoteList />
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
  };
};

export default connect(mapStateToProps)(App);
