import { useEffect, useState } from "react"
import Image from "../components/Image"
import { dummyImages, type ImageData } from "../context/Images"

const Search = () => {
    const [search, setSearch] = useState<string>("")
    const [images, setImages] = useState<ImageData[]>([])
    const [paginatedImages, setPaginatedImages] = useState<ImageData[]>([])
    const [page, setPage] = useState<number>(1)
    const [perPage] = useState<number>(12)
    const [hasMore, setHasMore] = useState<boolean>(true)

    const handleSearch = () => {
        let search_words = search.split(' ').map(word => word.trim())
        let search_images: ImageData[] = []
        
        if (search_words.length === 1 && search_words[0] === "") {
            setImages(dummyImages)
            setPage(1)
            return
        }
        
        for (const image of dummyImages) {
            for (const word of search_words) {
                if (image.description.toLowerCase().includes(word.toLowerCase()) ||
                    image.tags?.toString().toLowerCase().includes(word.toLowerCase())) {
                    search_images.push(image)
                    break;
                }
            }
        }
        setImages(search_images)
        setPage(1)
    }

    const loadMoreImages = () => {
        const startIndex = (page - 1) * perPage
        const endIndex = startIndex + perPage

        const nextImages = images.slice(startIndex, endIndex)
        
        if (nextImages.length === 0) {
            setHasMore(false)
            return
        }

        setPaginatedImages(prev => [...prev, ...nextImages])
        
        setPage(prev => prev + 1)
    }

    const resetPagination = () => {
        const startIndex = 0
        const endIndex = perPage
        
        const initialImages = images.slice(startIndex, endIndex)
        setPaginatedImages(initialImages)
        setPage(2)
        setHasMore(images.length > perPage)
    }
    
   
    useEffect(() => {
        handleSearch()
    }, [search])
    
   
    useEffect(() => {
        if (images.length > 0) {
            resetPagination()
        } else {
            setPaginatedImages([])
            setHasMore(false)
        }
    }, [images])

    return (
        <div className="relative w-full">
            <p className="relative text-6xl font-light pb-7">Search</p>
            <div className="relative w-full ">
                <input 
                    type="search" 
                    className="relative w-full p-4 ring-2 focus:ring-primary focus:ring-offset-2 duration-1000" 
                    placeholder="Search" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <p className="relative text-sm font-bold py-5">ALL RESULTS</p>
            
            {images.length > 0 ? (
                <>
                    <div className="relative w-full flex flex-row flex-wrap">
                        {paginatedImages.map((image, index) => (
                            <div key={`${image.id}-${index}`} className="relative w-1/3 p-1">
                                <Image
                                    src={image.url}
                                    showSkeleton
                                    alt={image.description}
                                    size={"100%"}
                                    className="aspect-square"
                                />
                            </div>
                        ))}
                    </div>
                    
                    {hasMore && (
                        <div className="relative w-full flex justify-center py-8">
                            <button
                                onClick={loadMoreImages}
                                className="relative w-full text-sm flex justify-center  font-bold items-center px-6 py-3 items-cete border-2 hover:bg-black rounded-md hover:text-white cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                               SEE MORE
                            </button>
                        </div>
                    )}
                    
                    {!hasMore && paginatedImages.length > 0 && (
                        <p className="text-center py-4 text-gray-500">
                            No more photos to show
                        </p>
                    )}
                </>
            ) : (
                <p className="relative w-full py-5 text text-center">No photos Found</p>
            )}
        </div>
    )
}

export default Search