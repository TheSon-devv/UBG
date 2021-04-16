import React from "react";

const InfoCms = () => {
  return (
    <div
      className="row"
      style={{
        width: "90%",
        border: "1px solid black",
      }}
    >
      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Loại thông báo
          </label>
          <div>
            <select
              className="form-select"
              id="specificSizeSelect"
              name="loai_tin"
            >
              <option selected>Gửi thông báo tới noti app</option>
              <option defaultValue="1">Gửi thông báo tới email</option>
            </select>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Đối tượng nhận thông báo
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Title tiếng việt
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Title tiếng anh
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Link tiếng việt
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Link tiếng anh
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Nội dung tiếng việt
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Nội dung tiếng anh
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card-body">
          <button class="btn btn-primary">Xác Nhận</button>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card-body">
          <button class="btn btn-danger">Hủy Bỏ</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCms;
