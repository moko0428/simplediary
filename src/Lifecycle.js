import React, { useEffect, useState } from "react";

const Unmount_test = () => {
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("UnMount");
    };
  }, []);
  return <div>Unmount_testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>on/off</button>
      {isVisible && <Unmount_test />}
    </div>
  );
};

export default Lifecycle;
