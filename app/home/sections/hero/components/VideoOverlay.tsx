"use client";

export const VideoOverlay = () => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <video
        loop
        muted
        autoPlay
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      >
        <source src="/Casino_Playing_1920x1080.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <div className="absolute inset-0 z-[1] h-full w-full bg-black/50 bg-blend-soft-light" />
      <div className="absolute inset-0 z-[2] h-full w-full bg-gradient-to-b from-black/0 to-black" />
    </div>
  );
};
