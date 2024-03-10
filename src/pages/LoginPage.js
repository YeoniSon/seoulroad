import React, { useState } from "react";
import dummyData from "../api/dummyData";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = dummyData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      props.onLoginSuccess();
    } else {
      alert("유효하지 않은 정보입니다.");
    }
  };

  return (
    <>
      <h2>로그인</h2>

      <div className="form">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button onClick={handleLogin}>로그인</button>
        <div>
          <p>계정이 없으신가요?</p>
          <Link to={"/signup"}>SignUp</Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
