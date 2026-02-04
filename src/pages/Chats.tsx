import { useNavigate } from "react-router"
import { dummyChats } from "../context/Chats"
const Chats = () => {
const navigate = useNavigate()
    return (
        <div className="relative w-full divide-y divide-secondary ">
            {
                dummyChats.map(chat =>
                {
                    console.log(chat.otherPerson.name);
                    
                    return(

                    <div className="relative flex flex-row justify-start items-start p-3 py-5 cursor-pointer duration-300 hover:bg-secondary focus:ring-offset-primary" onClick={() => navigate(`${chat.id}` )}>
                        <img className="relative w-16 h-16 rounded-full " src={chat.otherPerson.avatar} />
                        <div className="relative">
                            <p className="relative font-bold px-3 pb-1 text-sm"> {chat.otherPerson.name}</p>
                            <p className="relative font px-3 text-sm"> {chat?.messages[chat?.messages.length - 1]?.text}</p>
                        </div>
                    </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Chats
