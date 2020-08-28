import React from "react";

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  const iets = () => {
    if (style.done === 0) {
      return <p> Hey </p>;
    }
  };

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
      {done === 0 ? <p>Nog niet begonnen </p> : done === 100 ? "finisch" : ""}
    </div>
  );
};

export default Progress;
