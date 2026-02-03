import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.tsx';
import Chats from './pages/Chats.tsx';
import Navbar from './components/Navigation/Navbar.tsx';
import { AiOutlineHome } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Chat from './pages/Chat.tsx';
import { GoSearch } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import Header from './components/Header.tsx';
import Search from './pages/Search.tsx';
const navitems = [
  {
    title: "Home",
    Icon: AiOutlineHome,
    goTo: ""
  },

  {
    title: "Search",
    Icon: GoSearch,
    goTo: "search"
  },
  {
    title: "Add",
    Icon: AiOutlinePlus,
    goTo: "add",
  },
  {
    title: "Chats",
    Icon: BsChat,
    goTo: "chats"
  },
  {
    title: "profile",
    Icon: IoPersonOutline,
    goTo: "profile"
  },
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-y-auto transition-all duration-300">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <div className="flex-1 pt-10 pb-20 px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/:id" element={<Chat />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Navbar navitems={navitems} />
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
