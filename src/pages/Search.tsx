import Image from "../components/Image"
import { dummyImages } from "../context/Images"

const Search = () => {

    return (
        <div className="relative w-full">
            <p className="relative text-6xl font-light pb-7">Search</p>
            <div className="relative w-full ">
                <input type="search" className="relative w-full border-[3px] border-black p-4" placeholder="Search" />
            </div>
            <p className="relative text-sm font-bold py-5">ALL RESULTS</p>
            <div className="relative w-full flex flex-row flex-wrap ">
                {
                    dummyImages.map(image =>
                        <div className="relative w-1/3 p-1">
                            <Image
                                src={image.url}
                                showSkeleton
                                alt={image.description}
                                size={"100%"}
                                className="aspect-square"
                            />
                        </div>


                    )
                }
            </div>
        </div >
    )
}

export default Search