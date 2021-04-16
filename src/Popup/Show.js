import React from "react";

const Show = (props) => {
  return props.close ? (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: "1",
      }}
    >
      <div
        style={{
          position: "absolute",
          padding: "32px",
          width: "100%",
          maxWidth: "640px",
          top: "40%",
          right: "20%",
          border: "1px solid black",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "2",
        }}
      >
        <h6 className="card-subtitle mb-2 text-muted">{props.message}</h6>
        <a href="#" className="card-link" onClick={props.setClose}>
          Đồng Ý
        </a>
        <a href="#" className="card-link" onClick={props.setClose}>
          Hủy Bỏ
        </a>
      </div>
    </div>
  ) : null;
};

export default Show;
