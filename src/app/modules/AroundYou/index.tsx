import { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "@store/index";
import { useGetSongsByCountryQuery } from "@store/services/shazamCore";
import Spinner from "@shared/components/Spinner";
import Error from "@shared/components/Error";
import SongCard from "@shared/components/SongCard";

const CountryTracks = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country, {
    skip: country.length === 0,
  });

  useEffect(() => {
    axios
      .get(`https://api.db-ip.com/v2/free/self`)
      .then((res) => setCountry(res.data.countryCode))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (isFetching && loading)
    return <Spinner title="Loading Songs around you..." />;

  if (error && country !== "") return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black">{country}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
