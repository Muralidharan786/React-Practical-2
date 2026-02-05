import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running");
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Cleanup timer");
    };
  }, []);

  return <h2>Check console for timer logs</h2>;
}
export default Timer;



