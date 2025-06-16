export default function ResumePage() {
  return (
    <div>
      <iframe
        src="/cv.pdf"
        alt="CV"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] md:h-[80vh] shadow-xl z-40"
      />
    </div>
  );
}
