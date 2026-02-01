
const Committed = (event : any) => {
    return (
        <div className="relative flex w-full min-h-16">
            <div className="relative flex flex-col items-center w-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-1/2 bg-custom-gray-border" />
            
                <div className="relative z-10 w-7 h-7 bg-custom-gray-border rounded-full" />
                
                {!event.isLast && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-1/2 bg-custom-gray-border" />
                )}
            </div>
            
            <div className="flex-1 ml-4 py-1  pb-5">
                <div className="flex items-start gap-3">
                    <img 
                        src={event.avatar || "default-avatar.png"} 
                        className="w-6 h-6 rounded-full bg-custom-gray-border"
                        alt="User"
                    />
                    <div>
                        <p className="text-sm text-custom-gray-border">{event.message}</p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Committed