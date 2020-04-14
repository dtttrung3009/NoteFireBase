import React, { Component } from "react";
import NodeItem from "./NodeItem";
import { noteData } from "./firebaseConnect";
export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: [],
    };
  }
  componentWillMount() {
    noteData.once("value", (notes) => {
      var arrayData = [];
      notes.forEach((element) => {
        let key = element.key;
        let content = element.val().content;
        let title = element.val().title;
        arrayData.push({
          key,
          content,
          title,
        });
      });
      this.setState({
        dataFirebase: arrayData,
      });
    });
  }
  getData = () => {
    // console.log(this.state.dataFirebase);
    return this.state.dataFirebase.map((value, key) => {
      return <NodeItem 
      id={key}
       key={key} 
       title={value.title} 
       content={value.content} 
       value={value}/>;
    });
  };
  render() {
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {this.getData()}
        </div>
      </div>
    );
  }
}
