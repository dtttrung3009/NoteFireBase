import React, { Component } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import "./../App.css";
import { connect } from "react-redux";
import NavMenu from "./NavMenu";
class App extends Component {
  showForm=()=>{
    if(this.props.isEdit)
    return <NoteForm/>
  };
  render() {
    return (
      <div>
        <NavMenu />
        <div className="container">
          <div className="row">
            <NoteList className='mt-20' />
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App);