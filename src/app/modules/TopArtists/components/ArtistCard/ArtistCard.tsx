import { FallbackCover } from "@assets/index";
import { useNavigate } from "react-router-dom";
import { TopArtistProps } from "./interface";

const ArtistCard = ({ track }: TopArtistProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => {
        if (track.artists) {
          navigate(`/artists/${track?.artists[0].adamid}`);
        }
      }}
    >
      <img
        alt="song_img"
        src={track?.images?.coverart || FallbackCover}
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
