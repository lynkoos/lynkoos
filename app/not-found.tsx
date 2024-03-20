// app/page.tsx

import "@/app/global/globals.css"
import "./css/404.css"

export default function NotFoundPage() {
  return (
    <div className="NotFoundContPrin">
        <div className="NotFoundConent">
          <h3 className="NotFoundH3">404</h3>
          <div className="NotFoundBackH3"></div>
          <div>
            <span>El enlace al que intentas acceder no se ha pidido encontrar, por favor, verifica el enlace</span>
          </div>
        </div>
    </div>
  );
}