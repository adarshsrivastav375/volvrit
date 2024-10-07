"use client";
import { useRef, useEffect } from "react";

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Add event listener to handle manual loop
    const handleVideoEnd = () => {
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    // Cleanup event listener
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="https://volvrit.s3.ap-south-1.amazonaws.com/aboutUsVideo.mp4"
      autoPlay
      muted
      playsInline
      className="w-full aspect-square rounded-xl object-cover"
    />
  );
};

export default VideoComponent;
