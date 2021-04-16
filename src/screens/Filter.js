import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [filter, setFilter] = useState({
    userName: "",
    soID: "",
    show: 10,
    loai_tin: "",
  });

  const reset = (e) => {
    e.preventDefault();

    setFromDate("");
    setToDate("");
    setFilter({
      userName: "",
      soID: "",
      show: 10,
      loai_tin: "",
    });
  };
  const handleChanged = (event) => {
    // console.log(event.target.value);
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeDateFrom = (date) => {
    setFromDate(date);
  };
  const handleChangeDateTo = (date) => {
    setToDate(date);
  };
  return (
    <div className="accordion col-md-10" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Bộ lọc quản lý chợ
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form className="row g-3">
              <div className="col-12 col-lg-6">
                <div className="row form-group">
                  <label className="form-label">Từ ngày</label>
                  <div className="col-md-12">
                    <DatePicker
                      selected={fromDate}
                      onChange={handleChangeDateFrom}
                      showTimeSelect
                      dateFormat="dd/MM/yyyy h:mm:ss aa"
                      className="custom-datepicker"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row form-group">
                  <label className="form-label">Đến ngày</label>
                  <div className="col-md-12">
                    <DatePicker
                      selected={toDate}
                      onChange={handleChangeDateTo}
                      showTimeSelect
                      dateFormat="dd/MM/yyyy h:mm:ss aa"
                      className="custom-datepicker"
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="row form-group">
                  <label className="form-label">Tên đăng nhập</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tên đăng nhập"
                      name="userName"
                      value={filter.userName}
                      onChange={handleChanged}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="row form-group">
                  <label className="form-label"> ID gói</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số ID"
                      name="soID"
                      value={filter.soID}
                      onChange={handleChanged}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12">
                <div className="row form-group">
                  <label className="form-label col-lg-12">Loại tin</label>
                  <div className="col-md-6">
                    <select
                      className="form-select"
                      id="specificSizeSelect"
                      name="loai_tin"
                      value={filter.loai_tin}
                      onChange={handleChanged}
                    >
                      <option selected>Tất cả</option>
                      <option defaultValue="1">One</option>
                      <option defaultValue="2">Two</option>
                      <option defaultValue="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12">
                <div className="row form-group">
                  <label className="form-label col-lg-12">Hiển thị</label>
                  <div className="col-md-6">
                    <select
                      className="form-select"
                      id="specificSizeSelect"
                      name="show"
                      value={filter.show}
                      onChange={handleChanged}
                    >
                      <option defaultValue="1">10</option>
                      <option defaultValue="2">20</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="box-button d-flex col-12 justify-content-end mt-3">
                <button type="submit" className="btn btn-light" onClick={reset}>
                  Reset
                </button>
                <button type="submit" className="btn btn-primary ml-3">
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
