import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Delete from "../../Popup/Delete";
import Show from "../../Popup/Show";
import Action from "../Action";

const Chitiet = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [activeShow, setActiveShow] = useState(false);
  const [active, setActive] = useState(false);
  const handleClose = () => {
    setLoading(false);
    setShow(false);
  };
  const handleSuccess = () => {
    setLoading(false);
    setShow(true);
  };

  const handleDelete = () => {
    setActive(true);
    setMessage("Bạn có chắc chắn muốn xóa tin đăng này?");
    setLoading(true);
    setActiveShow(false);
  };
  const handleShow = () => {
    setMessage("Bạn có chắc chắn muốn hiện tin đăng này?");
    setLoading(true);
    setActiveShow(true);
  };
  const handleHidden = () => {
    setActive(true);
    setMessage("Bạn có chắc chắn muôn ẩn tin đăng này?");
    setLoading(true);
    setActiveShow(false);
  };

  return (
    <>
      {active ? (
        <Delete
          close={loading}
          setClose={handleClose}
          yes={handleSuccess}
          message={message}
        />
      ) : null}
      {activeShow === true ? (
        <Show message={message} setClose={handleClose} close={loading} />
      ) : null}

      {!show ? (
        <div
          className="card col-10"
          style={{ position: "fixed", maxWidth: "640px" }}
        >
          <Action
            handleShow={handleShow}
            handleDelete={handleDelete}
            handleHidden={handleHidden}
          />
          <table className="col-md-6">
            <tbody>
              <tr>
                <td>Loại</td>
                <td>Tin thanh khoản</td>
              </tr>
              <tr>
                <td>ID:</td>
                <td>B625048656</td>
              </tr>
              <tr>
                <td>Username:</td>
                <td>ubgtest1</td>
              </tr>
              <tr>
                <td>Số UP/ Tỷ lệ:</td>
                <td>7000/19000</td>
              </tr>
              <tr>
                <td>Thời gian:</td>
                <td>13:01-6/3/2021</td>
              </tr>
              <th></th>
              <tr>
                <th>*Thông tin ngân hàng</th>
              </tr>
              <tr>
                <td>Ngân hàng:</td>
                <td>BIDV</td>
              </tr>
              <tr>
                <td>Chủ tài khoản:</td>
                <td>Lưu Hoàng Thái</td>
              </tr>
              <tr>
                <td>Số tài khoản:</td>
                <td>20102032030232</td>
              </tr>
              <tr>
                <td>Chi nhánh:</td>
                <td>Chợ Lớn</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
      {/* <div className="col-md-9">
          <label style={{ display: "flex" }}>
            <p>Loại:</p>
            <span>Tin thanh khoản</span>
          </label>
          <label style={{ display: "flex" }}>
            <p>ID:</p>
            <span>B625048656</span>
          </label>
          <label style={{ display: "flex" }}>
            <p>Username:</p>
            <span>ubgtest1</span>
          </label>
          <label style={{ display: "flex" }}>
            <p>Số UP/ Tỷ lệ:</p>
            <span>9000/19000</span>
          </label>
          <label style={{ display: "flex" }}>
            <p>Thời gian:</p>
            <span>13:01-6/3/2021</span>
          </label>
        </div> */}
    </>
  );
};

export default Chitiet;
