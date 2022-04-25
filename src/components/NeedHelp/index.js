import React from "react";
import "./NeedHelp.css";

function NeedHelp() {
  return (
    <div className="help">
      <div className="help_inner">
        <h2>
          You can contact us via email if you have any problems with website.
        </h2>
        <form action="">
          <input
            type="email"
            placeholder="Write your email here e.g. myemail@gmail.com"
            id="emailInput"
          />
          <textarea
            name="text"
            placeholder="How can we help you?"
            id="textInput"
            cols="60"
            rows="10"
          ></textarea>
          <button>send</button>
        </form>
      </div>
    </div>
  );
}

export default NeedHelp;
