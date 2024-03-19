// app/layouts/content/index.tsx

import Link from "next/link"
import Image from "next/image";
import styles from "./style.module.css";

export default function Content() {
  return (
    <div className={styles.ContentContainer}>
      <div className={`${styles.ContentBanner} ${styles.ContentBannerColor1}`}></div>
      <div className={`${styles.ContentBanner} ${styles.ContentBannerColor2}`}></div>
      <div className={`${styles.ContentBanner} ${styles.ContentBannerColor3}`}></div>
      <div className={`${styles.ContentBanner} ${styles.ContentBannerColor4}`}>
        <div className={styles.contentTextIndex}>
          <div className={styles.ContentImageWrapper}>
            <Image src="/Logo-Blue.svg" alt="Logo-Red" width={80} height={80} priority />
          </div>
          <div className={styles.ContentTextCont}>
            <span className={styles.ContentTextSpan}>opcion1 </span>
            <span className={styles.ContentTextSpan}>opcion2 </span>
            <span className={styles.ContentTextSpan}>opcion3 </span>
            <span className={styles.ContentTextSpan}>opcion4 </span>
          </div>
        </div>
        <div className={styles.ContentTextH1Welcome}>
          <h1>Bienvenido a <div className={styles.ContentDivName}>lynkoos</div></h1>
        </div>
        <div className={styles.ContentImageSpan}>
          <div className={styles.ContentSpan}>
            <span>Tu puerta al exito profecional</span>
            <span>Compartir te conecta</span>
          </div>
          <div className={styles.ContentClassImage}>
            <Image src="/Logo-Blue.svg" alt="Logo-Red" width={200} height={200} priority />
          </div>
        </div>
        <div>
          <Link href="/dowload" target="_blanck">
            <button className={styles.ButtonDowload}>DESCARGAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
