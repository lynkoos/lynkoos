import '@/app/css/redirect.css';
import "@/app/global/globals.css";

export default function LinkedinPage() {
  return (
    <div className="redirect-container">
      <h2 className="redirect-message">Redirigiendo a LinkedIn...</h2>
      <meta http-equiv="refresh" content="5;URL='https://www.linkedin.com/company/lynkoos/'" />
    </div>
  );
}

