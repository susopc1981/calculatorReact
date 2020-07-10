import React from "react";

export function HistoricDiv(props) {
  if (props.showHistoric === "show") {
    return (
      <div>
        <label>Últimas 5 operaciones</label>
        <div>
          {props.value.map((value) => {
            return <p>{value}</p>;
          })}
        </div>
      </div>
    );
  }
  return <></>;
}
