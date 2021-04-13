import "./App.css";
import React, { useState } from "react";
import RegistrationPage from "./pages/RegistrationPage";
import RegisteredUsers from "./pages/RegisteredUsers";
import { Route, Switch } from "react-router";
function App() {
  const [getUsers, setGetUsers] = useState([]);
  return (
    <div>
      <Switch>
        <Route path="/registeredUsers">
          <RegisteredUsers setGetUsers={setGetUsers} getUsers={getUsers} />
        </Route>
        <Route path="/">
          <RegistrationPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
