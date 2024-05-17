import React from "react";

export const HeaderRender: React.FC<any> = ({ value, onChange }) => {
  const handlePrevMonth = () => {
    const newValue = value.clone().subtract(1, "month");
    onChange(newValue);
  };

  const handleNextMonth = () => {
    const newValue = value.clone().add(1, "month");
    onChange(newValue);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div onClick={handlePrevMonth}>{"<"}</div>
      <div>{value.format("MMMM YYYY")}</div>
      <div onClick={handleNextMonth}>{">"}</div>
    </div>
  );
};
