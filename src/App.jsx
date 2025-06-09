import { useState } from "react";
import Register from "./Register";

function App() {
  return (
    <div className="bg-blue-50 h-screen">
      <form className="w-64 mx-auto">
        <input type="text" placeholder="username" className="block w-full" />
        <input type="text" placeholder="password" className="block w-full" />
      </form>
    </div>
  );
}
export default App;
