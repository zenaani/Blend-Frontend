import { useState } from "react";
import "./App.css";
import Router from "./Pages/Router/Router";
import { UserContext } from "./Contexts/UserContext";

function App() {
  const [userId, setUserId] = useState(0);

  return (
    <div>
      <UserContext.Provider value={{ userId, setUserId }}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
