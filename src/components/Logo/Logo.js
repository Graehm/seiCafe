import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <div className={styles.rotate}>Bimmer</div>
    <div className={styles.rotate}>Bits</div>
  </div>
);
}
