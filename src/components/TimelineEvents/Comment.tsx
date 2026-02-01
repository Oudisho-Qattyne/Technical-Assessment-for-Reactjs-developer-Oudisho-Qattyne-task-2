import FormattedText from "../FormattedText"

const Comment = (event : any) => {
    return (
        <div className="relative flex w-full min-h-16 ">
        <div className="relative flex flex-col items-center w-10">
            {!event.isFirst && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-1/2 bg-custom-gray-border" />
            )}
            
            <div className="relative z-10 w-7 h-7 bg-custom-gray-border rounded-full" />
            
            {!event.isLast && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-1/2 bg-custom-gray-border" />
            )}
        </div>
        
        <div className="relative w-full pb-5 ml-4">
                    <div className="relative w-full border border-custom-gray-border rounded-lg overflow-hidden">
                        <div className="relative w-full  bg-dark-foreground border-b border-custom-gray-border px-3 py-2 ">
                            <p className="relative">{event.user.login}</p>
                        </div>
                        <div className="relative w-full p-5 ">
                            <FormattedText text={event.body} />

                        </div>
                    </div>
                </div>
    </div>
    )
}

export default Comment