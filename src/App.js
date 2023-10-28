import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Ошибка при получении доступа к камере:', error);
      }
    }

    startCamera();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline></video>
    </div>
  );
}

export default App;
