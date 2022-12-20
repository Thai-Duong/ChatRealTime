import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Login from "./components/Login/Login";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ChatRoom />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
