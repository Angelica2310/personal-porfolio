import { MeteorPink } from "./MeteorPink";
import { MeteorWhite } from "./MeteorWhite";
import { Star } from "./Star";

export default function BackgroundBox() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="element meteorPink meteorP-ani-1">
        <MeteorPink />
      </div>
      <div className="element meteorPink meteorP-ani-2">
        <MeteorPink />
      </div>
      <div className="element meteorWhite meteorW-ani-1">
        <MeteorWhite />
      </div>
      <div className="element meteorWhite meteorW-ani-2">
        <MeteorWhite />
      </div>
      <div className="element star star-pos-1 star-size-1 star-ani-1">
        <Star />
      </div>
      <div className="element star star-pos-2 star-size-1 star-ani-2">
        <Star />
      </div>
      <div className="element star star-pos-3 star-size-1 star-ani-3">
        <Star />
      </div>
      <div className="element star star-pos-4 star-size-1 star-ani-4">
        <Star />
      </div>
      <div className="element star star-pos-5 star-size-1 star-ani-5">
        <Star />
      </div>
      <div className="element star star-pos-6 star-size-1 star-ani-6">
        <Star />
      </div>
      <div className="element star star-pos-7 star-size-1 star-ani-7">
        <Star />
      </div>
    </div>
  );
}
