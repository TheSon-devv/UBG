import React from "react";

const Action = (props) => {
  return (
    <div
      className="col-md-6 justify-content-end btn-group mt-3"
      role="group"
      style={{ position: "absolute", top: 0, right: 0 }}
    >
      <button className="btn btn-success" onClick={props.handleHidden}>
        Ẩn*
      </button>
      <button className="btn btn-warning" onClick={props.handleShow}>
        Hiện*
      </button>
      <button className="btn btn-danger" onClick={props.handleDelete}>
        Xóa*
      </button>
    </div>
  );
};

export default Action;
