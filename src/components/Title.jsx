import React from "react";

function Title({ title, subTitle, align }) {
  return (
    <div className={`flex flex-col mb-6 px-2 justify-center items-${align} text-${align || "center"} `}>
      <h2 className="text-4xl">{title}</h2>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
        {subTitle}
      </p>
    </div>
  );
}

export default Title;
