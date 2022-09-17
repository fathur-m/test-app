import PulseLoader from "react-spinners/PulseLoader";
import Logo from "../Logo";

function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <Logo className="h-12" />
      <PulseLoader color="#6A8CBF" />
    </div>
  );
}

export default LoadingScreen;
