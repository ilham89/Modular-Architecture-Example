import { useParams } from "react-router-dom";
import DetailHeader from "@shared/components/DetailHeader";
import Error from "@shared/components/Error";
import Spinner from "@shared/components/Spinner";
import { useAppSelector } from "@store/index";
import { useGetArtistDetailsQuery } from "@store/services/shazamCore";
import RelatedSongs from "@shared/components/RelatedSong/RelatedSong";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId, { skip: !artistId });

  if (isFetchingArtistDetails)
    return <Spinner title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailHeader artistId={artistId} artistData={artistData?.data[0]} />

      <RelatedSongs
        data={artistData?.data[0].views["top-songs"]?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
