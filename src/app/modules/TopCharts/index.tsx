import { useGetTopChartsQuery } from "@store/services/shazamCore";
import Error from "@shared/components/Error";
import Spinner from "@shared/components/Spinner";
import SongCard from "@shared/components/SongCard";
import { useAppSelector } from "@store/index";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  if (isFetching) return <Spinner title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
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

export default TopCharts;
