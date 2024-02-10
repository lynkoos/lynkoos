// ModalCamara.jsx
import React, { useState, useRef } from 'react';

const ModalCamara = ({ onClose, onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      onClose();
    }
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const photoUrl = canvas.toDataURL('image/png');
    onCapture(photoUrl);
    onClose();
  };

  const handleClose = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    onClose();
  };

  return (
    <div className={`modal ${isCameraActive ? 'active' : ''}`}>
      <div className="modal-content">
        <video ref={videoRef} autoPlay />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <div className="modal-buttons">
          <button onClick={handleClose}>No, volver</button>
          <button onClick={capturePhoto}>Capturar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCamara;
