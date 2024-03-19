import '@/app/css/redirect.css';
import "@/app/global/globals.css";

export default function whatsappPage() {
  return (
    <div className="redirect-container">
      <h2 className="redirect-message">Redirigiendo a whatsapp...</h2>
      <meta http-equiv="refresh" content="5;URL='https://whatsapp.com/channel/0029VaEvuxEDJ6HAStkRdp3O'" />
    </div>
  );
}

