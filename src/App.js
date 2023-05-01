import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("https://phoudthavisack.github.io/base64-2-audio/base64/hello.txt")
      .then((r) => r.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        padding: 10,
        gap: 20,
      }}
    >
      <div
        style={{
          fontSize: 32,
          // fontWeight: "bold",
          color: "#353535",
          height: 120,
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          "font-family": '"Sigmar", cursive',
        }}
      >
        Base64 to audio
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: 600,
          padding: 20,
          borderRadius: 8,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <textarea
          placeholder="Base64"
          onChange={(e) => setText(e.target.value)}
          value={text}
          style={{
            width: "100%",
            border: "1px solid #ccc",
            padding: 10,
            height: "auto",
            flex: 1,
            color: "#777777",
            borderRadius: 8,
            resize: "none",
            overflow: "hidden",
          }}
        ></textarea>
        <div style={{ height: 10 }} />
        <audio
          src={`data:audio/mpeg;base64,${text}`}
          controls
          style={{ width: "100%" }}
        >
          The “audio” tag is not supported by your browser.
        </audio>
      </div>
      <div style={{ height: 40, color: "#777777" }}>
        © Copyright by Phoudthavisack
      </div>
    </div>
  );
}

export default App;
