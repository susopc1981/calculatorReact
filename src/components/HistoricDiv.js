import React from "react";

export function HistoricDiv(props) {
  return (
    <div>
      {props.value.map((value) => {
        return <p>{value}</p>;
      })}
    </div>
  );
}
