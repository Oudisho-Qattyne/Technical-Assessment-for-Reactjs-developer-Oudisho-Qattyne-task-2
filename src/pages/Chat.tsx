import { useLocation } from "react-router"
import { dummyChats } from "../context/Chats"
import { useEffect, useState } from "react"
interface Messages {
    id: string;
    text: string;
    sender: string;
    timestamp: Date;
    isRead: boolean;
}[]
interface OtherPerson {
    name: string;
    avatar: string;
    isOnline: boolean;
}
const Chat = () => {
    const [chat , setChat] = useState<Messages[]>()
    const [user , setUser] = useState<OtherPerson>()
    const location = useLocation()

    useEffect(() => {
        const chat_id = location.pathname.split('/').pop()
        const chat = dummyChats.filter(chat => chat.id.toString() == chat_id)
        if(chat.length > 0){
            setUser(chat[0].otherPerson)
            setChat(chat[0].messages)
        }
    } , [])
    return (
        <div className="relative w-full ">
            {
                chat?.map(message => 
                    <div className={`relative w-full flex flex-row p-2 gap-2 ${message.sender == "other" ? `flex-row` : `flex-row-reverse` }`}>
                            <img className="relative w-7 h-7 rounded-full " src={message.sender=="other" ? user?.avatar : 'https://picsum.photos/id/1015/1200/800'}/>
                            <div className="relative wrap-break-word text-sm bg-custom-gray-border2 rounded-md p-3">
                                    {message.text}
                                </div>
                    </div>
                )
            }
        </div>
    )
}

export default Chat
