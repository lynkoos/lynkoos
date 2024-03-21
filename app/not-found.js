import Link from 'next/link'
import "@/app/global/globals.css";
import "./css/404.css";

export default function NotFoundPage() {
  return (
    <div className="NotFoundContPrin">
      <div className="NotFoundConent">
        <article className="card">
          <div className="card-inner">
            <span className="card-pin"></span>
            <h3 className="card-title">404</h3>
            <div className="card-content">
              <span className="card-meta-number">El enlace al que intentas acceder no se ha podido encontrar. Por favor, verifica el enlace.</span>
            </div>
            <div className="card-pin"></div>
          </div>
        </article>
        <div className="NotFoundBack"></div>
        <div className="NotFoundContBack">
          <Link href="/">
            <span className='NotFoundContSpan'>volver</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
