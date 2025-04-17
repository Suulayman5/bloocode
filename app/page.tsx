import Ads from "./components/Ads";
import ClientWrapper from "./components/ClieentWrapper";
import Landing from "./components/Landing";


export default function Home() {
  return (
    <div className=" bg-[#F6F6F6] min-h-screen">

    <ClientWrapper>
      <div className="hidden md:block">

      <Ads />
      </div>
      <Landing />
      {/* Other components */}
    </ClientWrapper>
    </div>
  );
}