import { useEffect, useState } from "react";

function Timers() {
const [count, setCount] = useState(0);

useEffect(() => { setTimeout(() => {
setCount((count) => count + 1);
}, 1000);
}, []);

return <h1>I've rendered {count} times!</h1>;
}
export default Timers;








// import { useEffect, useState } from "react";

// function Timer() {
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     if (!start) return;

//     const timer = setInterval(() => {
//       console.log("Timer running");
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [start]);

//   return (
//     <>
//       <button onClick={() => setStart(true)}>Start</button>
//       <button onClick={() => setStart(false)}>Stop</button>
//     </>
//   );
// }

// export default Timer;
