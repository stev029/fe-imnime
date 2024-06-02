import { BiPlay, BiChevronLeft, BiChevronRight } from "react-icons/bi"
import useScrollCarousel from "../utils/useScroll";

export default function ContentCard({ data, children, ...prop }) {
  const {
    containerRef,
    handleScroll,
    scrollPosition,
    scrollTo,
  } = useScrollCarousel()

  return (
    <>
      {data ?
        <div className="relative my-7">
          <div ref={containerRef} {...prop} className="content-sjhf flex overflow-x-auto gap-y-7 gap-x-3" onScroll={handleScroll} onLoad={handleScroll}>
            {/* <div ref={contentContainer} className="content-sjhf flex overflow-x-auto gap-y-7 gap-x-3"> */}
            {/* <div className={`absolute flex items-center p-1 left-2 bottom-1/2 z-10 rounded-full bg-slate-100/50 hover:bg-slate-100/70 ${console.log(scrollPosition)}`}> */}
            <div className={`absolute flex items-center p-1 left-2 bottom-1/2 z-10 rounded-full bg-slate-100/50 hover:bg-slate-100/70 ${scrollPosition.current == 0 ? "invisible" : ""}`}>
              <button className="text-4xl text-gray-800" name="prev" onClick={scrollTo}><BiChevronLeft /></button>
            </div>
            {/* <div className={`absolute flex items-center p-1 right-2 bottom-1/2 z-10 rounded-full bg-slate-100/50 hover:bg-slate-100/70 ${console.log(scrollPosition)}`}> */}
            <div className={`absolute flex items-center p-1 right-2 bottom-1/2 z-10 rounded-full bg-slate-100/50 hover:bg-slate-100/70 ${scrollPosition.current == scrollPosition.max ? "invisible" : ""}`}>
              <button className="text-4xl text-gray-800" name="next" onClick={scrollTo}><BiChevronRight /></button>
            </div>
            {data.data.map((result) => {
              console.log(result)
              return (
                <div key={result.id} className="flex flex-col basis-[calc(100%_/_4_-_1em)] shrink-0 justify-betwee md:basis-1/4 sm:basis-1/3">
                  <a href={`/anime/${result.mal_id}`} title="Anime 2">
                    <div className="img-mmgy relative w-full p-[30%] overflow-hidden">
                      <img className="w-full max-h-full object-cover absolute left-0 top-0" src={result.images.webp.image_url} alt="Anime 2" />
                      <span className="absolute top-0 right-0 bg-gray-600 rounded-bl-md px-3">Eps 7</span>
                      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full transition opacity-0 z-[1] hover:opacity-100 hover:backdrop-blur-sm">
                        <BiPlay className="text-5xl" />
                      </div>
                    </div>
                    <h1 className="text-sm mt-1 font-bold">{result.title}</h1>
                  </a>

                  <div className="flex justify-between mt-2 items-center md:block">
                    <span className="text-[.7em]">3 Jam Lalu</span>
                  </div>
                </div>)
            })}
            {children}
          </div>
        </div>
        : ""}
    </>
  )
}