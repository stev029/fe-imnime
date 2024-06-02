import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAnimeById } from "../../utils/animeFetch";
import VideoPlayer from "../video-player/VideoPlayer";

export default function GetAnime() {
  const [anime, setAnime] = useState({
    "mal_id": 0,
    "url": "string",
    "images": {},
    "trailer": {},
    "approved": true,
    "titles": [],
    "title": "string",
    "title_english": "string",
    "title_japanese": "string",
    "title_synonyms": [],
    "type": "TV",
    "source": "string",
    "episodes": 0,
    "status": "Finished Airing",
    "airing": true,
    "aired": {},
    "duration": "string",
    "rating": "G - All Ages",
    "score": 0,
    "scored_by": 0,
    "rank": 0,
    "popularity": 0,
    "members": 0,
    "favorites": 0,
    "synopsis": "string",
    "background": "string",
    "season": "summer",
    "year": 0,
    "broadcast": {},
    "producers": [],
    "licensors": [],
    "studios": [],
    "genres": [],
    "explicit_genres": [],
    "themes": [],
    "demographics": []
  })
  const { id } = useParams();

  useEffect(() => {
    const fetchAnime = async () => {
      const getAnime = await GetAnimeById(id)
      setAnime(animeCurrent => ({ ...animeCurrent, ...getAnime.data }))
      console.log(anime)
    }
    fetchAnime()
      .catch(console.error)
  }, [])

  return (
    <>
      <VideoPlayer url={anime.trailer.url} />
      <h1>title: {anime.title}</h1>
      <p>{anime.synopsis}</p>
    </>
  )
}

