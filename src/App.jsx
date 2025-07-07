import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import ChatList from "./components/chatList";
import ChatRoom from "./components/chatRoom";
import LoginPage from "./components/loginPage";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat-list" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App
