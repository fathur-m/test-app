import MotionDiv from "../../components/animations/MotionDiv";
import Header from "../../components/Header";
import ProtectRoutes from "../../components/ProtectRoutes";
import requests from "../../libs/request";
import { Movie } from "../../libs/typings";
import VideoPlayer from "./VideoPlayer";

interface Props {
  movie: Movie;
}

export default function MovieDetail({ movie }: Props) {
  return (
    <MotionDiv className="relative">
      <ProtectRoutes>
        <Header />
        <VideoPlayer videoUrl={movie.videos} />
        <div className="">
          <h1>{movie.title}</h1>
        </div>
      </ProtectRoutes>
    </MotionDiv>
  );
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const detailId = requests.getDetail(id);
  const movie = await (await fetch(detailId)).json();

  return { props: { movie } };
}
