import { useState, useEffect } from "react"
import { BiSolidBookmark } from "react-icons/bi"
import ContentCard from "../contentCard"
import { GetRecommendAnime, GetTopAnime } from "../../utils/animeFetch"
import Header from "../header"

function Home() {
  const [anime, setAnime] = useState({ recommend: null, topAnime: null })

  useEffect(() => {
    const getData = async () => {
      const AnimeRecommend = await GetRecommendAnime()
      const AnimeTop = await GetTopAnime()
      setAnime(currentAnime => ({ ...currentAnime, recommend: AnimeRecommend, topAnime: AnimeTop }));
    }
    getData().catch(console.error);
  }, [])

  return (
    <>
      <div className="bg-gray-900 min-h-screen md:justify-between text-slate-100 dark:text-black">
        <Header />
        <div className="py-20 px-10" >
          <div className="w-full p-3 rounded-md">
            <a href="#popular" className="text-2xl hover:text-slate-300 cursor-pointer font-semibold">Popular Anime &gt;</a>
            <div className="grid grid-cols-5 grid-rows-2 my-7 w-full gap-x-3 gap-y-7 md:grid-cols-3 sm:grid-cols-2 sm:grid-rows-3">
              <div className="flex flex-col justify-between w-full">
                <a href="#anime1" title="Anime 1">
                  <div className="relative w-full p-[35%] overflow-hidden">
                    <img className="w-full max-h-full object-cover absolute left-0 top-0" src="https://i3.wp.com/animesail.com/wp-content/uploads/2024/03/1711820152-141710l.jpg" alt="Anime 1" />
                    <span className="absolute text-[.7em] bottom-0 left-0 font-bold bg-gray-600 rounded-md px-3">Ongoing</span>
                    <span className="absolute top-0 right-0 bg-gray-600 rounded-bl-md px-3">1-12 Eps</span>
                  </div>
                  <h1 className="text-xl">Anime 1</h1>
                </a>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[.7em] font-bold">120x Ditonton</span>
                  <BiSolidBookmark className="cursor-pointer text-xl" />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <a href="#anime1" title="Anime 2">
                  <div className="relative w-full p-[35%] overflow-hidden">
                    <img className="w-full max-h-full object-cover absolute left-0 top-0" src="https://i3.wp.com/animesail.com/wp-content/uploads/2024/03/1711820152-141710l.jpg" alt="Anime 2" />
                    <span className="absolute text-[.7em] bottom-0 left-0 font-bold bg-gray-600 rounded-md px-3">Ongoing</span>
                    <span className="absolute top-0 right-0 bg-gray-600 rounded-bl-md px-3">1-12 Eps</span>
                  </div>
                  <h1 className="text-xl">Anime 2</h1>
                </a>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[.7em] font-bold">120x Ditonton</span>
                  <BiSolidBookmark className="cursor-pointer text-xl" />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <a href="#anime1" title="Anime 2">
                  <div className="relative w-full p-[35%] overflow-hidden">
                    <img className="w-full max-h-full object-cover absolute left-0 top-0" src="https://i3.wp.com/animesail.com/wp-content/uploads/2024/03/1711820152-141710l.jpg" alt="Anime 2" />
                    <span className="absolute text-[.7em] bottom-0 left-0 font-bold bg-gray-600 rounded-md px-3">Ongoing</span>
                    <span className="absolute top-0 right-0 bg-gray-600 rounded-bl-md px-3">1-12 Eps</span>
                  </div>
                  <h1 className="text-xl">Anime 2</h1>
                </a>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[.7em] font-bold">120x Ditonton</span>
                  <BiSolidBookmark className="cursor-pointer text-xl" />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <a href="#anime1" title="Anime 2">
                  <div className="relative w-full p-[35%] overflow-hidden">
                    <img className="w-full max-h-full object-cover absolute left-0 top-0" src="https://i3.wp.com/animesail.com/wp-content/uploads/2024/03/1711820152-141710l.jpg" alt="Anime 2" />
                    <span className="absolute text-[.7em] bottom-0 left-0 font-bold bg-gray-600 rounded-md px-3">Ongoing</span>
                    <span className="absolute top-0 right-0 bg-gray-600 rounded-bl-md px-3">1-12 Eps</span>
                  </div>
                  <h1 className="text-xl">Anime 2</h1>
                </a>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[.7em] font-bold">120x Ditonton</span>
                  <BiSolidBookmark className="cursor-pointer text-xl" />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <a href="#anime1" title="Anime 2">
                  <div className="relative w-full p-[35%] overflow-hidden">
                    <img className="w-full max-h-full object-cover absolute left-0 top-0" src="https://i3.wp.com/animesail.com/wp-content/uploads/2024/03/1711820152-141710l.jpg" alt="Anime 2" />
                    <span className="absolute text-[.7em] bottom-0 left-0 font-bold bg-gray-600 rounded-md px-3">Ongoing</span>
                    <span className="absolute top-0 right-0 bg-gray-600 rounded-bl-md px-3">1-12 Eps</span>
                  </div>
                  <h1 className="text-xl">Anime 2</h1>
                </a>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[.7em] font-bold">120x Ditonton</span>
                  <BiSolidBookmark className="cursor-pointer text-xl" />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <a href="#anime1" title="Anime 2">
                  <div className="relative w-full p-[35%] overflow-hidden">
                    <img className="w-full max-h-full object-cover absolute left-0 top-0" src="https://i3.wp.com/animesail.com/wp-content/uploads/2024/03/1711820152-141710l.jpg" alt="Anime 2" />
                    <span className="absolute text-[.7em] bottom-0 left-0 font-bold bg-gray-600 rounded-md px-3">Ongoing</span>
                    <span className="absolute top-0 right-0 bg-gray-600 rounded-bl-md px-3">1-12 Eps</span>
                  </div>
                  <h1 className="text-xl">Anime 2</h1>
                </a>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[.7em] font-bold">120x Ditonton</span>
                  <BiSolidBookmark className="cursor-pointer text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-3 rounded-md">
            <a className="text-xl font-semibold hover:text-slate-300" href="#new-upload">Popular &gt;</a>
            <ContentCard data={anime.topAnime} />
            {/* <ContentCard data={anime.recommend} /> */}
          </div>
        </div>
      </div >
    </>
  )
}

export default Home
