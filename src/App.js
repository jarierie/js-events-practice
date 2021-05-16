import { useEffect, useRef, useState } from "react";

function App() {
  const [nice, setNice] = useState(false);
  const ref = useRef(null);
  const clicks = (e) => {
    console.log(e);
    ref.current.click();
  };
  useEffect(() => {
    if (nice) {
      ref.current.click();
    } else {
      console.log("HOY");
    }
  }, [nice]);
  return (
    <>
      <h1
        style={{ visibility: "hidden" }}
        ref={ref}
        onClick={() => console.log("Nag iba nga")}
      >
        {" "}
        Hello?
      </h1>
      <input placeholder='enter shit' onClick={clicks}></input>
      <button onMouseDown={() => setNice(!nice)}>xd</button>
    </>
  );
}

export default App;
