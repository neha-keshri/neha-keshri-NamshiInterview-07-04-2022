import { useState } from "react";
import "./App.css";

function App() {
  const [checked, setChecked] = useState([]);
  const [checkArr, setArr] = useState([]);
  let array = Array.from({ length: 16 }, () => 0);

  return (
    <>
      <div className="container">
        <div className="m-auto w-50">
          <div className="row mt-3">
            {array?.map((_, index) => (
              <div
                key={index}
                className="col-3"
                onClick={() => {
                  let temp = [...checked];
                  if (temp.length === 2) {
                    temp.shift();
                  }
                  if (!temp.includes(index)) setChecked([...temp, index]);
                  if (!checkArr.includes(index)) setArr([...checkArr, index]);
                }}
              >
                <div
                  className="box-view"
                  style={{
                    backgroundColor: checked.includes(index) ? "red" : "blue",
                  }}
                >
                  {checkArr.length > 0 &&
                    checkArr.includes(index) &&
                    `Box ${checkArr.indexOf(index) + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
