import '@/app/css/redirect.css';
import "@/app/global/globals.css";

export default function instagramPage() {
  return (
    <div className="redirect-container">
      <h2 className="redirect-message">Redirigiendo a instagram...</h2>
      <meta http-equiv="refresh" content="5;URL='https://www.instagram.com/lynkoos_/'" />
    </div>
  );
}

