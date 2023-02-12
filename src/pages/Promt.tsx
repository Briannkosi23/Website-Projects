import { FunctionComponent } from "react";
import styles from "./Promt.module.css";

const Promt: FunctionComponent = () => {
  return (
    <div className={styles.promt}>
      <img className={styles.promtChild} alt="" src="../group-1.svg" />
      <div className={styles.promtItem} />
      <div className={styles.promtInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.easyAccessWalletContainer}>
        <p className={styles.easyAccessWallet}>Easy access Wallet ,</p>
        <p className={styles.easyAccessWallet}> store your bank cards,</p>
        <p className={styles.easyAccessWallet}>loyalty Cards,</p>
        <p className={styles.easyAccessWallet}>Vouchers and Digital keys</p>
      </div>
      <b className={styles.pressNextTo}>Press Next to get Started</b>
      <b className={styles.next}>Next</b>
    </div>
  );
};

export default Promt;
