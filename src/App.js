import React from "react";
import ThemeContext from "./komponente/ThemeContext";
import ComponentA from "./komponente/ComponentA"

function App() {
  return (
    <ThemeContext.Provider value={{ text: "Pozdrav", number: 91 }}>
      <ComponentA />
    </ThemeContext.Provider>
  );
}

export default App;
