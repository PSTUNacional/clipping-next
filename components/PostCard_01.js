import Link from "next/link";
import styles from "../styles/PostCard_01.module.css";

export default function PostCard01 ({title, img, href}){
    return(
        <>
        <Link href={href}>
        <div
              className={styles.postitem}
            >
              <div className={styles.postimage_container}>
                <div
                  className={styles.postimage}
                  style={{
                    "background-image": `url(${img})`,
                  }}
                ></div>{" "}
              </div>{" "}
              <div className={styles.postinfo}>
                <h3> {title} </h3>{" "}
              </div>{" "}
            </div>
            </Link>
        </>
    )
}