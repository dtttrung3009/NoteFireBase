import React, { Component } from "react";

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteContent: "",
    };
  }
  isChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  addData=(title, content)=>{
    let item={};
    item.title=title;
    item.content=content;
   this.props.getData(item)
  }
  render() {
    return (
      <div className="col-4">
        <form>
          <div className="form-group">
            <label>Tiêu đề note</label>
            <input
              onChange={(event) => this.isChange(event)}
              type="text"
              className="form-control"
              name="noteTitle"
              placeholder="Tiêu đề note"
            />
          </div>
          <div className="form-group">
            <label>Nội dung note</label>
            <textarea
              className="form-control"
              name="noteContent"
              placeholder="Nội dung note"
              rows="3"
              onChange={(event) => this.isChange(event)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={() =>
              this.addData(this.state.noteTitle, this.state.noteContent)
            }
          >
            Lưu
          </button>
        </form>
      </div>
    );
  }
}
