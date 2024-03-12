import React, { useState } from "react";
import dummyData from "../api/dummyData";
import styles from "./SignUpPage.module.css";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [tell, setTell] = useState("");
  const [role, setRole] = useState("회원");
  const [idAvailable, setIdAvailable] = useState(true);

  const checkIdClick = () => {
    if (dummyData.find((user) => user.id === id)) {
      setIdAvailable(false);
      alert("이미 존재하는 아이디입니다.");
    } else {
      setIdAvailable(true);
      alert("사용 가능한 아이디입니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: username,
      id: id,
      password: password,
      tell: tell,
      role: role,
      registration_date: new Date().toLocaleDateString(),
    };

    checkIdClick();

    if (!idAvailable) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // dummyData 배열의 복사본을 만들고 그것을 수정하여 상태를 변경합니다.
    const updatedDummyData = [...dummyData];
    updatedDummyData.push(newUser);

    // 상태 업데이트
    dummyData(updatedDummyData);

    // 양식 초기화
    setUsername("");
    setId("");
    setPassword("");
    setPassword2("");
    setTell("");
    setRole("회원");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <div className={styles.contents}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </div>
        <div className={styles.idbox}>
          <input
            className={styles.id}
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          <button
            className={styles.checkbox}
            type="button"
            onClick={checkIdClick}
          >
            중복확인
          </button>
          {!idAvailable && <div>이미 존재하는 아이디입니다.</div>}
        </div>
        <div className={styles.contents}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className={styles.contents}>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="비밀번호를 입력하세요 (확인)"
          />
        </div>
        <div className={styles.contents}>
          <input
            type="text"
            value={tell}
            onChange={(e) => setTell(e.target.value)}
            placeholder="전화번호를 입력하세요(010-1234-5678)"
          />
        </div>
        <div className={styles.contents}>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="회원">회원</option>
            <option value="관리자">관리자</option>
          </select>
        </div>
        <button className={styles.signup} type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
