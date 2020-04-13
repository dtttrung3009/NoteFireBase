import React, { Component } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import "./../App.css";
import NavMenu from "./NavMenu";
import { noteData } from "./firebaseConnect";
export default class App extends Component {
  addData = (item) => {
    noteData.push(item);
  };
  render() {
    return (
      <div>
        <NavMenu />
        <div className="container">
          <div className="row">
            <NoteList />
            <NoteForm getData={(item) => this.addData(item)} />
          </div>
        </div>
      </div>
    );
  }
}
