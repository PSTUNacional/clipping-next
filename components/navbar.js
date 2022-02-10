import Link from "next/link";
import styles from "../styles/Navbar.module.css"


export default function Navbar() {
  return (
      <navbar className={styles.navbar}>
    <ul>
      <li>
        <Link href="">
          <a> PSTU </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a> LIT - QI </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a> Metroviários SP </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a> MIT(Chile) </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a> Socialismo Hoy(Costa Rica) </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a> Corriente Roja(Estado Espanhol) </a>
        </Link>
      </li>
    </ul>
    </navbar>
  );
}
