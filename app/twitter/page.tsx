import '@/app/css/redirect.css';
import "@/app/global/globals.css";

export default function twitterPage() {
  return (
    <div className="redirect-container">
      <h2 className="redirect-message">Redirigiendo a twitter...</h2>
      <meta http-equiv="refresh" content="5;URL='https://www.twitter.com/lynkoos/'" />
    </div>
  );
}

