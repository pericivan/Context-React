import React from "react";
import ThemeContext from "./ThemeContext";


const ComponentD = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div>
          <h5>Component D</h5>
          <p>{context.text}</p>
          <p>{context.number}</p>

        </div>
      )}
    </ThemeContext.Consumer>
  )
}

// DESTRUCTURING
// const ComponentD = () => (
//   <ThemeContext.Consumer>
//     {({ text, number }) => (
//       <div>
//         <h5>Component D</h5>
//         <p>{text}</p>
//         <p>{number}</p>
//       </div>
//     )}
//   </ThemeContext.Consumer>
// );

export default ComponentD;