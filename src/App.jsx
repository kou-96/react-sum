import { useState } from "react";

function App() {
  const [firstInputNum, setFirstInputNum] = useState();
  const [secondInputNum, setSecondInputNum] = useState();
  const [answer, setAnswer] = useState();

  function sumInputs() {
    const sum = Number(firstInputNum) + Number(secondInputNum);

    setAnswer(sum);
  }

  return (
    <>
      <input
        type="text"
        value={firstInputNum}
        onChange={(event) => setFirstInputNum(event.target.value)}
      />
      +
      <input
        type="text"
        value={secondInputNum}
        onChange={(event) => setSecondInputNum(event.target.value)}
      />
      <button onClick={sumInputs}>Answer</button>
      <div>{answer}</div>
    </>
  );
}

export default App;
