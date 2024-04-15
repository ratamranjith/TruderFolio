import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex g-10 items-center">
      <h1 className="text-3xl text-tertiary font-semibold">{title}</h1>
      <hr />
    </div>
  );
}

export default SectionTitle;
