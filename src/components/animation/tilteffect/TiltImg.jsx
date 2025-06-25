import { Tilt } from "./TiltEffect";
import Image from "next/image";

export function TiltCard1() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <Image
        src="/girl.png"
        alt="girl"
        width={400}
        height={400}
        className="pl-10 w-[90vw] xl:w-[40vw] h-auto place-self-center"
      />
    </Tilt>
  );
}
