// Div.jsx
import React, { useState, useEffect, useRef } from 'react';
import feather from 'feather-icons';
import chatData from '../json/Chat.json';
import ModalCamara from '../Modules/ModalCamara';

const Div = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const fakeChatRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [urlToOpen, setUrlToOpen] = useState('');
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const sendIcon = feather.icons.send.toSvg();
  const userIcon = feather.icons.user.toSvg();
  const cameraIcon = feather.icons.camera.toSvg();
  const fileIcon = feather.icons.file.toSvg();
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  useEffect(() => {
    setMessages(chatData.messages || []);
    scrollToBottom();
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };

      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputValue('');
      scrollToBottom();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleScrollButtonClick = () => {
    scrollToBottom();
    setShowScrollButton(false);
  };

  const handleChatScroll = () => {
    if (fakeChatRef.current.scrollTop < fakeChatRef.current.scrollHeight - fakeChatRef.current.clientHeight - 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToBottom = () => {
    fakeChatRef.current.scrollTop = fakeChatRef.current.scrollHeight;
  };

  const renderMessageText = (text) => {
    // Validar si es un número de teléfono o una URL
    const phoneRegex = /\b\d{10,}\b/g;
    const urlRegex = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.]+/g;

    return text.split(/\s+/).map((word, index) => {
      if (phoneRegex.test(word)) {
        return (
          <span key={index} style={{ color: 'blue' }}>
            {word}
          </span>
        );
      } else if (urlRegex.test(word)) {
        return (
          <span key={index} style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleOpenModal(word)}>
            {word}
          </span>
        );
      } else {
        return word;
      }
    });
  };

  const handleOpenModal = (url) => {
    setIsModalOpen(true);
    setUrlToOpen(url);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUrlToOpen('');
  };

  const handleConfirmModal = () => {
    window.open(urlToOpen, '_blank');
    setIsModalOpen(false);
    setUrlToOpen('');
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      mediaStreamRef.current = stream;
      videoRef.current.srcObject = stream;
      setIsCameraModalOpen(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      // Handle error, show a message, etc.
    }
  };

  const handleCapturePhoto = () => {
    if (mediaStreamRef.current) {
      const track = mediaStreamRef.current.getTracks()[0];
      const imageCapture = new ImageCapture(track);

      imageCapture.takePhoto().then((blob) => {
        setCapturedPhoto(URL.createObjectURL(blob));
      });
    }
  };

  const handleCloseCamera = () => {
    setIsCameraModalOpen(false);
    if (mediaStreamRef.current) {
      const tracks = mediaStreamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  return (
    <div className='class-sett-cont-der'>
      <div className='class-sett-cont-der-back'>
        <div className='class-sett-cont-der-top'>
          <div className='chevron-icon' dangerouslySetInnerHTML={{ __html: feather.icons['chevron-left'].toSvg() }} />
          <div className='user-icon class-border' dangerouslySetInnerHTML={{ __html: userIcon }} />
          <div className='user-name'>Nombre del Usuario</div>
          <div className={`camera-icon ${isCameraModalOpen ? 'active' : ''}`} dangerouslySetInnerHTML={{ __html: cameraIcon }} onClick={handleCameraClick} />
          <div className='file-icon' dangerouslySetInnerHTML={{ __html: fileIcon }} />
        </div>
        <div className='fake-chat' ref={fakeChatRef} onScroll={handleChatScroll}>
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              {renderMessageText(message.text)}
            </div>
          ))}
        </div>
        {showScrollButton && (
          <div className='scroll-button' onClick={handleScrollButtonClick}>
            <div dangerouslySetInnerHTML={{ __html: feather.icons['arrow-down'].toSvg() }} />
          </div>
        )}
        <div className='class-sett-cont-chat'>
          <div className='class-sett-cont-chat-input'>
            <div className='class-sett-cont-chat-input-text'>
              <input
                type="text"
                name="chat"
                id="chat"
                placeholder="Escribe un mensaje..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="send-icon" dangerouslySetInnerHTML={{ __html: sendIcon }} onClick={handleSendMessage}></div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Estás por salir de la página. ¿Deseas continuar?</p>
            <div className="modal-buttons">
              <button onClick={handleCloseModal}>No, volver</button>
              <button onClick={handleConfirmModal}>Sí, acepto</button>
            </div>
          </div>
        </div>
      )}

      {isCameraModalOpen && (
        <ModalCamara videoRef={videoRef} onCapture={handleCapturePhoto} onClose={handleCloseCamera} />
      )}

      {capturedPhoto && (
        <div className="captured-photo">
          <img src={capturedPhoto} alt="Captured" />
        </div>
      )}
    </div>
  );
}

export default Div;
