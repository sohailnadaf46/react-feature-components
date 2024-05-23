import React, { useState } from "react";
import QRCode from "react-qr-code";

//when we have the data i.e the state that stores the input we have to pass it into the Qr code as value

const CodeGenerator = () => {
  const [data, setData] = useState("");
  const [QrCode, setQrCode] = useState("");

  const handleCodeGeneration = (e) => {
    setQrCode(data);
    setData("")
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>QR Code generator</h1>

      <input
        type="text"
        placeholder="enter text..."
        name="qrcode"
        value={data}
        onChange={(e) => setData(e.target.value)}
        style={{ textAlign: "center", padding: "0.5rem 2rem", marginBottom:"2rem"}}
      />
      <button onClick={handleCodeGeneration}>Generate</button>

      {data && <QRCode value={QrCode} size={400} />}
    </div>
  );
};

export default CodeGenerator;
