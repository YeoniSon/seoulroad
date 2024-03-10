import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

function DetailPage() {
  return (
    <div className="container">
      <div className="images">
        <img></img>
      </div>
      <div className="title">
        <h1></h1>
        <Button onClick={handleBookmarkClick}></Button>
      </div>
      <h3></h3>

      <div className="tel">
        <h2></h2>
        <p></p>
      </div>
      <div className="add">
        <h2></h2>
        <p></p>
      </div>
      <div className="time">
        <h2></h2>
        <p></p>
      </div>
      <div className="rest">
        <h2></h2>
        <p></p>
      </div>
      <div className="details">
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
}
export default Detail;
