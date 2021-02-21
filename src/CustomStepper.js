import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
function CustomStepper({ checked, side }) {
  return (
    <div style={{ margin: "2%", display: "flex", width: "fit-content" }}>
      {checked ? (
        <CheckCircleIcon style={{ color: "green" }} />
      ) : (
        <CancelRoundedIcon style={{ color: "red" }} />
      )}
      <div style={{ marginLeft: "2%", fontFamily: "Roboto Condensed" }}>
        {side}
      </div>
    </div>
  );
}
export default CustomStepper;
