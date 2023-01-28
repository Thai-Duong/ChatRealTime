import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Login from "./components/Login/Login";
import InviteMembers from "./components/modal/InviteMembers";
import ModalAddRooms from "./components/modal/ModalAddRooms";
import AppProvider from "./Context/AppProvider";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<ChatRoom />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <ModalAddRooms></ModalAddRooms>
          <InviteMembers></InviteMembers>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
