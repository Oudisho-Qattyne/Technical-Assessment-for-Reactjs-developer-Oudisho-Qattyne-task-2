import { useNavigate, useParams } from "react-router"
import { useApi } from "../../hooks/useApi";
import { useEffect } from "react";
import { GitHubSpinner } from "../../components/GithubSpinner";
import { FaCodeFork } from "react-icons/fa6";
import FormattedText from "../../components/FormattedText";
import Event from "../../components/TimelineEvents/Event";
import { FaArrowLeft } from "react-icons/fa"
import { LuCircleCheck } from "react-icons/lu";
const Issue = () => {
    const { id } = useParams()
    const { data: issue, loading: loadingIssue, error: issueError, get: getIssue } = useApi();
    const { data: issuTimeLine, loading: loadingTimeLineIssue, error: issueTimeLineError, get: getIssueTimeLine } = useApi();
    const navigate = useNavigate();
    useEffect(() => {
        getIssue(`https://api.github.com/repos/facebook/react/issues/${id}`)
        getIssueTimeLine(`https://api.github.com/repos/facebook/react/issues/${id}/timeline`)
    }, [])
    console.log(issuTimeLine);

    return (
        <div className="relative">
            {
                loadingIssue
                    ?
                    <GitHubSpinner />
                    :
                    <div className="relative w-full p-5 lg:px-40 md:px-5 flex flex-col gap-4">
                        <div className="relative w-full flex flex-row gap-2 justify-start items-center">
            <FaArrowLeft className="absolute -left-16 cursor-pointer" onClick={() =>navigate(-1)}/>

                            <p className="relative text-3xl">{issue.title}</p>
                            <p className="relative text-3xl text-secondary">#{id}</p>
                        </div>
                        <div className={`relative rounded-full w-fit ${issue.state == "open" ? "bg-custom-green" : "bg-custom-purple"} py-1 px-3 flex flex-row items-center gap-2 `} >
                            {
                                issue.state == "open"?
                                <FaCodeFork className="relative text-white" />
                                :
                                <LuCircleCheck className="relative text-white" />
                            }
                            {issue.state}
                        </div>
                        <hr className="text-custom-gray-border" />
                        <div className="relative flex flex-row  pt-4 gap-4">
                            <img src={issue.user.avatar_url} className="relative min-w-12 h-12 rounded-full bg-custom-gray" />
                            <div className="relative w-full ">
                                <div className="relative w-full border border-custom-gray-border rounded-lg overflow-hidden">
                                    <div className="relative w-full  bg-dark-foreground border-b border-custom-gray-border px-3 py-2 ">
                                        <p className="relative">{issue.user.login}</p>
                                    </div>
                                    <div className="relative w-full p-5 ">
                                        <FormattedText text={issue.body} />

                                    </div>
                                </div>
                                {
                                    !loadingTimeLineIssue &&
                                    <div className="relative">
                                        {
                                            issuTimeLine?.map((event:any , index:number) =>
                                                <Event {...event} isFirst={index==0} isLast={index == issuTimeLine.length-1}/>
                                            )
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
            }
        </div >
    )
}

export default Issue