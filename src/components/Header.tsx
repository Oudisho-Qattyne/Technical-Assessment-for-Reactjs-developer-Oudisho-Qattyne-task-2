import { useLocation, useNavigate } from "react-router"
import { IoIosArrowBack } from "react-icons/io";
import { dummyChats } from "../context/Chats";
const Header = () => {
    let title = ""
    let showHeader = true
    const location = useLocation()
    const navigate = useNavigate()
    const page = location.pathname.split('/').pop()
    const path = location.pathname.split('/')[location.pathname.split('/').length - 2]
    switch (path) {
        case "chats":
            let chat = dummyChats.filter(chat => chat.id.toString() == page)
            title = chat.length > 0 ? chat[0].otherPerson.name : ""
            break;
        default:
            title = page ? page : ""
            break;
    }
    switch (page) {
        case "":
            showHeader = false
            break;
        case "search":
            showHeader = false
            break;
        default:
            break;
    }

    return (
        showHeader &&
        <div className="relative w-full flex justify-center items-center p-2 border-b border-secondary bg-white">
            <IoIosArrowBack className="absolute left-0 text-4xl cursor-pointer" onClick={() => navigate(-1)} />
            <p className="relative capitalize font-bold text-xl">{title}</p>
        </div>
    )
}

export default Header