import Image from "next/image";
import loaderImage from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loaderImage} height={150} width={150} alt="loading..." />
    </div>
  );
};

export default LoadingPage;
