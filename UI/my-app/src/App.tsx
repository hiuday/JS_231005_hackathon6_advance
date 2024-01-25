import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main
        style={{
          textAlign: "center",
        }}
      >
        <div className="main-quiz">
          <h1>setup quiz</h1>
          <label
            style={{
              padding: "20px 0",
              outline: "none",
            }}
          >
            Số câu hỏi
          </label>
          <input
            style={{
              padding: "5px",
            }}
            type="number"
          />
          <label
            style={{
              padding: "20px 0",
            }}
          >
            Thể loại
          </label>
          <select
            style={{
              padding: "5px",
            }}
          >
            <option>địa lý</option>
            <option>lịch sử</option>
          </select>
          <label
            style={{
              padding: "20px 0",
            }}
          >
            Độ khó
          </label>
          <select
            style={{
              padding: "5px",
            }}
          >
            <option>dễ</option>
            <option>bình thường</option>
            <option>khó </option>
          </select>
          <button
            style={{
              margin: "20px 0",
              background: "orange",
              border: "none",
              padding: "5px",
            }}
          >
            bắt đầu làm bài
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
