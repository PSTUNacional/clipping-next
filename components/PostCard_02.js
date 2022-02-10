import Link from "next/link";
import styles from "../styles/PostCard_02.module.css";

export default function PostCard01({ title, img, href }) {
  return (
    <>
      <Link href={href}>
        <div className={styles.postitem}>
          <div className={styles.postimage_container}
         style={{
            "background-image": `url(${img})`,
          }}
          >
          </div>
         <div className={styles.gradient_cover}></div>
         <div className={styles.postinfo}>
           <h3 className={styles.posttitle}>{title}</h3>
         </div>
        </div>
      </Link>
    </>
  );
}
