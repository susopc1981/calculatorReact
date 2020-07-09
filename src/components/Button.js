import React from "react";

export const Button = (props) => {
  return (
    <td>
      <button type="button" value={props.value} onClick={props.handleClick}>
        {props.text}
      </button>
    </td>
  );
};
