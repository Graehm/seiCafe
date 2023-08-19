import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <div>Bimmer</div>
    <div>Bits</div>
  </div>
);
}

{/* <div style={transform.rotate}>Bimmer</div>
<div style={transform.rotate}>Bits</div> */}