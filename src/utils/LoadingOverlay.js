import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const overlayStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  marginTop: "200px",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
};

export default function LoadingOverlay({ loading }) {
  return (
    <>
      {loading && (
        <div style={overlayStyle}>
          <BounceLoader color="#1976d2" loading={loading} size={100} />
        </div>
      )}
    </>
  );
}
