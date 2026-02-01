import Comment from "./Comment";
import Committed from "./Committed";
import Labeled from "./Labeled";

const Event = (event: any) => {
    
    switch (event.event) {
        case "committed":
            return (<Committed {...event} />)
            case "commented":
            return (<Comment {...event} />)
            case "labeled":
            return (<Labeled {...event} />)
        default:
            break;
    }

}

export default Event