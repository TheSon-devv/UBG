import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const QLCho = () => {
  return (
    <div>
      <h2>Quản Lý Tin Đăng</h2>
      <ReactBootStrap.Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Số UP/Tỷ lệ</th>
            <th>ID gói</th>
            <th>Loại tin</th>
            <th>Thời gian</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ubgtest1</td>
            <td>7000/19000</td>
            <td>B625048656</td>
            <td>Tin thanh khoản</td>
            <td>13:01-6/3/2021</td>
            <td>
              <Link to="/chitiet" target="_blank">
                Xem chi tiet
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>ubgtest2</td>
            <td>5000/21000</td>
            <td>S336132123</td>
            <td>Tin sở hữu</td>
            <td>11:11-11/02/2021</td>
            <td>
              <Link to="/chitiet" target="_blank">
                Xem chi tiet
              </Link>
            </td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default QLCho;
