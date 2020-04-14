import React, { Component } from "react";
import { connect } from "react-redux";
import { toast} from "react-toastify";
class NodeItem extends Component {
  actionClick=()=>{
    this.props.changeStatusForm();
    this.props.getEditData(this.props.value)
  };
  actionDelete=()=>{
    this.props.getKeyDelete(this.props.value.key);
    toast.error("Xóa thành công");
  };
  render() {
    return (
      <div className="card mt-1">
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
                <button className="btn btn-outline-secondary" onClick={()=>this.actionDelete()}>Xóa</button>
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
    getKeyDelete: (key) => {
      dispatch({ type: "DELETE",key });
    },
  };
};
export default connect(null,mapDispatchToProps)(NodeItem);
