import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

function Hero() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen">
      <div className="overlay"></div>
      <div
        className="pt-[65px]"
        style={{
          backgroundImage: `url('/assets/backdrop2.jpg')`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="mincalc relative z-10 mx-auto flex max-w-7xl flex-col justify-center space-y-5 p-5">
          <div className="flex flex-col space-y-3 text-center">
            <h1 className="pt-8 text-4xl md:text-5xl md:font-semibold">
              Selamat Datang di{" "}
              <span className="text-ctm-blue">IDOV Movie</span>
            </h1>
            <h2 className="text-2xl font-light md:text-4xl">
              Tempat terbaik streaming film favoritmu
            </h2>
          </div>
          {!user && (
            <div className="mx-auto flex flex-col rounded-2xl px-8">
              <p className="text-center text-base font-light">
                Memulai keanggotaan di IDOV dengan mendaftarkan alamat emailmu.
              </p>
              <div className="mt-2 flex">
                <button
                  onClick={() => router.push("/SignUp")}
                  className="mx-auto mt-2 rounded-lg bg-ctm-green px-5 py-2"
                >
                  <span className="hidden md:block">Memulai Baru</span>
                  <PaperAirplaneIcon className="h-6 w-6 md:hidden" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
