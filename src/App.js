import "./Styles/index.scss";
import React from "react";
import Navbar from "./Coponnent/Navbar";
import { auth } from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import Chat from "./Coponnent/Chat";
function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar />
      {user && <Chat/>}
    </>
  );
}

export default App;
