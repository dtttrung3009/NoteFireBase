import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      title: "",
      content: "",
    };
  }
  componentWillMount() {
    if (this.props.editItem) {
      this.setState({
        key: this.props.editItem.key,
        content: this.props.editItem.content,
        title: this.props.editItem.title,
      });
    }
  }
  isChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  saveButton = (title, content, event) => {
    event.preventDefault();
    if (this.state.key) {
      let item = {};
      item.key = this.state.key;
      item.title = this.state.title;
      item.content = this.state.content;
      this.props.sendEditDataToStore(item);
      this.props.changeStatusForm();
      this.setState({
        key: "",
        title: "",
        content: "",
      });
      toast.success("Sửa thành công");
    } else {
      let item = {};
      item.title = title;
      item.content = content;
      this.props.addDataStore(item);
      this.setState({
        key: "",
        title: "",
        content: "",
      });
      toast.info("Thêm mới thành công");
      this.props.changeStatusForm();
    }
  };
  render() {
    return (
      <div className="col-4">
        <form method="post">
          <div className="form-group">
            <label>Tiêu đề note</label>
            <input
              value={this.state.title}
              onChange={(event) => this.isChange(event)}
              type="text"
              className="form-control"
              name="title"
              placeholder="Tiêu đề note"
            />
          </div>
          <div className="form-group">
            <label>Nội dung note</label>
            <textarea
              value={this.state.content}
              className="form-control"
              name="content"
              placeholder="Nội dung note"
              rows="3"
              onChange={(event) => this.isChange(event)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={(event) =>
              this.saveButton(this.state.title, this.state.content, event)
            }
          >
            Lưu
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (item) => {
      dispatch({ type: "ADD_DATA", item });
    },
    sendEditDataToStore: (editItem) => {
      dispatch({ type: "EDIT", editItem });
    },
    changeStatusForm: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
