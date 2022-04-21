import React from "react";

function TestPage({ title, name }) {
  const functionLogTest = () => {
    console.log("TestConsoleLog");
  };

  return (
    <div onClick={functionLogTest}>
      Hello world!! {title} {name}
    </div>
  );
}

export default TestPage;
