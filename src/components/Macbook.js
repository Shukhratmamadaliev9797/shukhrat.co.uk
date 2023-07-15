import React from "react";

export default function Macbook({ img, title }) {
  return (
    <div className="macbook">
      <h2>{title}</h2>
      <div class="macbook-frame video-outer">
        <div class="macbook-screen-container">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
