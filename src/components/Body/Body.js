import "./Body.css";
import book from "../../assets/book.png";
import vector from "../../assets/Vector.png";
import React from "react";
export default function Body() {
  return (
    <div className="container">
      <div className="image">
        <img src={book} alt="jstImg" className="book" />
        <img src={vector} alt="jstImg" className="vector" />
      </div>
      <div className="text">
        <text className="kzh">KzH </text>
        <text className="learn">Learning</text>
      </div>
      <div className="instruction">
        Learn the history Module By Module and Topic By Topic.
      </div>

      <div className="module">
        <text className="percent">56%</text>
        <text className="text_module">Кыпчаки</text>
        <text className="time_module">Тюркский период</text>
      </div>
      <label className="label_to_cont">Продолжите обучение.</label>
    </div>
  );
}
