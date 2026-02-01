import axios from "axios"
import { useEffect, useState } from "react"
import { GitHubSpinner } from "../../components/GithubSpinner"
import Search from "../../components/Search"
import { useApi } from "../../hooks/useApi"
import { FaRegComment } from "react-icons/fa6";
import { LuCircleDot, LuCircleCheck, LuCircleSlash } from "react-icons/lu";
import { Link } from "react-router"
import Select from "../../components/input/Select"
interface IssueState {
    id: number,
    item: string
}

const Issues = () => {

    const issues_state: IssueState[] = [
        {
            id: 1,
            item: "all",
        },
        {
            id: 2,
            item: "open",
        },
        {
            id: 3,
            item: "closed",
        },
    ]

    const [state, setState] = useState<IssueState>(issues_state[0])
    const [search, setSearch] = useState<string>("")
    const { data: issues, loading: loadingIssues, error: issuesError, get: getIssues } = useApi("https://api.github.com/repos/facebook/react/issues");
    const { data: repoInfo, loading: loadingRepoInfo, error: repoInfoError, get: getRepoInfo } = useApi("https://api.github.com/repos/facebook/react");


console.log(state);



    useEffect(() => {
        getIssues("", { state :state.item })
        getRepoInfo()
    }, [state])
    
   
    return (
        <div className="relative w-full ">
            {/* <div className="mb-6">
                <Link
                    to={""}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Issues
                </Link>
            </div> */}
            <div className="relative w-full p-5 lg:px-40 md:px-5">
                <Search value={search} onChange={setSearch} doSearch={() =>
                            getIssues("https://api.github.com/repos/facebook/react/issues", { state :state.item , q:search })
                }/>
                {
                    issuesError ?
                        <div className="relative ">
                            <p>somthing went wrong</p>
                            <button>try again</button>
                        </div>
                        :

                        loadingIssues ?
                            <GitHubSpinner />
                            :
                            <div className="relative w-full border border-custom-gray rounded-md overflow-hidden mt-3">
                                <div className="relative w-full flex flex-row justify-between items-center bg-leight dark:bg-dark-foreground border border-custom-gray-border p-3">
                                    {
                                        loadingRepoInfo ?
                                            <></>
                                            :

                                            <div className="relative gap-2 flex flex-row">
                                                <div className="relative flex flex-row gap-1 hover:bg-custom-gray-hover rounded-md p-1 transition ">
                                                    <p className="relative p-1 font-bold text-xs">Open</p>
                                                    <p className="relative p-1 font-bold text-xs bg-custom-gray rounded-full">{repoInfo.open_issues_count}</p>
                                                </div>
                                                <div className="relative flex flex-row gap-1 hover:bg-custom-gray-hover rounded-md p-1 transition ">
                                                    <p className="relative p-1 font-bold text-xs">Closed</p>
                                                    <p className="relative p-1 font-bold text-xs bg-custom-gray rounded-full">{repoInfo.closed}</p>
                                                </div>
                                            </div>
                                    }
                                    <Select value={state} data={issues_state} onChange={setState} placeholder="state"/>
                                </div>
                                <div className="realative w-full divide-y divide-custom-gray-border ">
                                    {
                                        issues.map(issue =>
                                            <div className="relative w-full flex flex-row p-3 hover:bg-custom-gray-hover" >
                                                <div className="relative flex justify-center items-center ">
                                                    {
                                                        issue.state == "open" ?
                                                            <LuCircleDot className="text-custom-green text-xl" />
                                                            :
                                                            issue.state == 'closed'
                                                                ?
                                                                <LuCircleCheck className="text-custom-purple text-xl" />
                                                                :
                                                                <LuCircleSlash className="text-secondary text-xl" />

                                                    }
                                                </div>
                                                <div className="relative px-2 w-[80%] gap-1">

                                                    <div className="relative  flex flex-row flex-wrap gap-1">
                                                        <Link className="relative font-bold text-white hover:text-blue-700 hover:underline hover:cursor-pointer" to={`/${issue.number}`}>
                                                            {issue.title}
                                                        </Link>
                                                        {issue.labels.map(label =>
                                                            <span className="relative flex justify-center items-center w-fit h-fit rounded-full overflow-hidden p-1 py-0.5" style={{ borderWidth: 1, borderColor: `#${label.color}` }}>
                                                                <div className="absolute w-full h-full opacity-15" style={{ background: `#${label.color}` }} />
                                                                <p className="relative text-xs text-current/5 whitespace-nowrap font-bold " style={{ color: `#${label.color}` }}>
                                                                    {label.name}
                                                                </p>
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="relative text-xs text-secondary pt-1">
                                                        #{issue.number} . {issue.user.login}
                                                    </p>
                                                </div>
                                                {
                                                    issue.comments > 0 &&
                                                    <p className="relative text-xs text-secondary flex flex-row justify-center items-center gap-1">
                                                        <FaRegComment /> {issue.comments}
                                                    </p>
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                }

            </div>


        </div>
    )
}

export default Issues
