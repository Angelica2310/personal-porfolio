import ConnectMe from "@/components/ConnectMe";
import Introduce from "@/components/Introduce";
import Introduction from "@/components/Introduction";

export const metadata = {
  title: "Home",
  description: "Briefly introduction",
};

export default function HomePage() {
  return (
    <div>
      <Introduction />
      <Introduce />
      <ConnectMe />
    </div>
  );
}
