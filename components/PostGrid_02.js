import styles from "../styles/PostGrid_02.module.css";

export default function PostGrid02 ({children}){
    return (
        <div className={styles.gridpost}>
            {children}
        </div>
    )
}