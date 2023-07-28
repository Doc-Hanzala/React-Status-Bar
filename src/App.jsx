import { useEffect, useRef, useState } from "react";
import Bars from "./components/Bars";
import Title from "./components/Title";

function App() {
  const [status, setStatus] = useState({
    nextJs: 10,
    reactJs: 90,
    nodeJs: 40,
  });

  const refContainer = useRef(null);

  const data = [
    { bgClr: "green", completed: status.nextJs },
    { bgClr: "red", completed: status.reactJs },
    { bgClr: "purple", completed: status.nodeJs },
  ];

  useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <main>
      <Title text={"progress status bar"} />
      <div className="input">
        <ul>
          <li>
            <span>{"next Js"}</span>
            <input
              type="number"
              ref={refContainer}
              value={status.nextJs}
              onChange={(e) => setStatus({ ...status, nextJs: e.target.value })}
            />
          </li>
          <li>
            <span>{"react Js"}</span>
            <input
              type="number"
              value={status.reactJs}
              onChange={(e) =>
                setStatus({ ...status, reactJs: e.target.value })
              }
            />
          </li>
          <li>
            <span>{"node js"}</span>
            <input
              type="number"
              value={status.nodeJs}
              onChange={(e) => setStatus({ ...status, nodeJs: e.target.value })}
            />
          </li>
        </ul>
      </div>
      {data.map((bar, index) => {
        return <Bars key={index} bgClr={bar.bgClr} completed={bar.completed} />;
      })}
    </main>
  );
}

export default App;
