import ConnectMe from "@/components/ConnectMe";
import Introduce from "@/components/Introduce";
import Introduction from "@/components/Introduction";
import "./globals.css";
import { Flex } from "@chakra-ui/react";
import BackgroundBox from "@/components/BackgroundBox";

export default function HomePage() {
  return (
    <div>
      <Introduction />
      <Introduce />
      <ConnectMe />
    </div>
  );
}
