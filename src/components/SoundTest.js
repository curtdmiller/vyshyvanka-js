import React from "react";

export default function SoundTest() {
  const [text, setText] = React.useState("");

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
