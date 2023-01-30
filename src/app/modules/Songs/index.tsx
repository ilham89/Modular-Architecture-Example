import DetailHeader from "@shared/components/DetailHeader";
import Error from "@shared/components/Error";
import RelatedSongs from "@shared/components/RelatedSong/RelatedSong";
import Spinner from "@shared/components/Spinner";
import { FeaturedAlbumsDatum } from "@shared/interfaces/detail-artist";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "@store/services/shazamCore";
import {
  playPause,
  setActiveSong,
} from "@store/slices/playerSlice/playerSlice";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const dispatch = useAppDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const {
    data,
    isFetching: isFetchinRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Spinner title="Searching song details" />;

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: FeaturedAlbumsDatum, i: number) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailHeader artistId={artistId} songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1]?.text?.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
