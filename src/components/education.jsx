import React from "react";

export default function Education(props) {
  return (
    <div className="bg-white py-5">
      <div className={`${props.card.Color} mx-3 py-2  rounded-xl`}>
        <div className="">
            <p className="text-gray-500 px-4">{props.card.Date}</p>
          <h1 className="text-xl px-4 pt-2">{props.card.title}</h1>
          <p className="pt-3 text-gray-700 px-4">{props.card.para}</p>
        </div>
      </div>
    </div>
  );
}