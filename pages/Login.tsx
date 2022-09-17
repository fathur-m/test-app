import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import MotionDiv from "../components/animations/MotionDiv";
import { useAuth } from "../hooks/useAuth";
import BackgroundImg from "../components/animations/BackgroundImg";
import ModalAnimation from "../components/animations/ModalAnimation";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import Input from "../components/Input";
import BeatLoader from "react-spinners/BeatLoader";
import { auth, db } from "../libs/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Head from "next/head";

function Login() {
  const { login } = useAuth();
  const [data, setData] = useState<any>({
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const { email, password, error, loading } = data;

  const handleInput = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "Mohon mengisi semua fields yang tersedia" });
    } else {
      try {
        const result = await login(data.email, data.password);
        await updateDoc(doc(db, "users", result.user.uid), {
          isOnline: true,
        });
        const username = await getDoc(doc(db, "users", result.user.uid)).then(
          (doc: any) => {
            if (doc.exists()) {
              return doc.data();
            }
          }
        );
        setData({
          email: "",
          password: "",
          error: null,
          loading: false,
        });
        Router.push("/");
      } catch (error: any) {
        setData({ ...data, error: error.message, loading: false });
      }
    }
  }
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setData({ ...data, error: null });
      }, 5000);
    }
  }, [error]);

  return (
    <MotionDiv
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <Head>
        <title>IDOV • Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundImg imageBg="/assets/backdrop2.jpg">
        <Logo className="relative z-10 mx-auto w-36 py-8" />
        <form
          onSubmit={handleSubmit}
          className="relative z-20 mx-auto max-w-md px-5 text-lg"
        >
          <h1 className="mt-4 text-2xl font-medium text-ctm-white">Masuk</h1>
          <div className="mt-2 flex flex-col space-y-5">
            <Input
              label="Alamat email"
              name="email"
              type="email"
              onChange={handleInput}
              value={email}
            />
            <Input
              label="Kata sandi"
              name="password"
              type="password"
              onChange={handleInput}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-ctm-green px-4 py-2"
          >
            {loading ? (
              <BeatLoader color="white" size={8} />
            ) : (
              <span>Masuk</span>
            )}
          </button>
          <div className="mt-8">
            <h1 className="text-xl font-medium">Belum punya akun?</h1>
            <Link href="/SignUp">
              <div className="mt-2 w-full cursor-pointer rounded-lg bg-ctm-blue px-4 py-2 text-center">
                <h1>Buat akun baru</h1>
              </div>
            </Link>
          </div>
        </form>
        <ModalAnimation
          transition={{ type: "linear" }}
          enterDuration={0.5}
          exitDuration={1.5}
          isVisible={error}
          className="absolute right-4 top-4 rounded-lg bg-ctm-blue px-4 py-2"
        >
          <div className="flex items-center space-x-2">
            <h1 className="text-lg">{error}</h1>
            <ExclamationTriangleIcon className="h-10 w-10" />
          </div>
        </ModalAnimation>
      </BackgroundImg>
    </MotionDiv>
  );
}

export default Login;
