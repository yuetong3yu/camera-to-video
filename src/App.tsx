import { useEffect, useRef } from 'react';

export const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function getCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
    getCamera();
  }, []);

  return (
    <>
      <h1>Camera: </h1>
      <video
        ref={videoRef}
        onLoadedMetadata={() => {
          videoRef.current?.play();
        }}
      />
    </>
  );
};
