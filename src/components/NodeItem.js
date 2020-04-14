import React, { Component } from "react";
import { connect } from "react-redux";
class NodeItem extends Component {
  actionClick=()=>{
    this.props.changeStatusForm();
    this.props.getEditData(this.props.value)
  };
  render() {
    return (
      <div className="card">
        <div className="card-header" role="tab">
          <h5 className="mb-0">
            <div className="row">
              <div className="col-9">
                <a
                  data-toggle="collapse"
                  data-parent="#noteList"
                  href={"#numbers" + this.props.id}
                  aria-expanded="true"
                  aria-controls="section1ContentId"
                >
                  {this.props.title}
                </a>
              </div>
              <div className="col-3">
                <button className="btn btn-outline-info" onClick={this.actionClick}>Sửa</button>
                <button className="btn btn-outline-secondary">Xóa</button>
              </div>
            </div>
          </h5>
        </div>
        <div
          id={"numbers" + this.props.id}
          className="collapse in"
          role="tabpanel"
          aria-labelledby="section1HeaderId"
        >
          <div className="card-body">{this.props.content}</div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStatusForm: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
    getEditData: (editItem) => {
      dispatch({ type: "GET_EDIT_DATA",editItem });
    },
  };
};
export default connect(null,mapDispatchToProps)(NodeItem);
