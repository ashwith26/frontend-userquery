import React from "react";
import Display from "./Display"; // Importing the DataDisplay component

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#282c34", padding: "10px", color: "white", textAlign: "center" }}>
        <h1>User Data</h1>
      </header>
      <main style={{ margin: "20px" }}>
        <Display />
      </main>
      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f1f1f1" }}>
        <p></p>
      </footer>
    </div>
  );
};

export default App;