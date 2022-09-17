import Image from "next/image";
import { Movie } from "../libs/typings";

interface Props {
  movie: Movie;
  onClick?: () => any;
}

function RowCard({ movie, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-lg object-cover md:rounded"
        layout="fill"
        alt={movie.title || movie.name}
      />
    </div>
  );
}

export default RowCard;
