import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InUseAbsa.module.css";

const InUseAbsa: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent210Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.inUseAbsa}>
      <div className={styles.inUseAbsaChild} />
      <div className={styles.holdNearReader}>Hold near reader to pay</div>
      <div className={styles.absaWrapper}>
        <div className={styles.absa}>
          <div className={styles.absa}>
            <div className={styles.personalDebitAbsaChild} />
            <img
              className={styles.absaLogo2022}
              alt=""
              src="../absa-logo-2022.svg"
            />
            <div className={styles.customerDetails}>
              <div className={styles.parent}>
                <div className={styles.div}>6005 9000 8000 4000</div>
                <div className={styles.div1}>2000</div>
              </div>
              <div className={styles.mrSSithole}>MR S. SITHOLE</div>
            </div>
            <div className={styles.rfidChip}>
              <div className={styles.rfidChipChild} />
              <div className={styles.rfidChipItem} />
              <div className={styles.rfidChipInner} />
              <div className={styles.lineDiv} />
              <div className={styles.rfidChipChild1} />
              <div className={styles.rfidChipChild2} />
            </div>
            <div className={styles.personalDebit}>Personal Debit</div>
          </div>
        </div>
      </div>
      <img
        className={styles.component104}
        alt=""
        src="../component-10--5.svg"
      />
      <div className={styles.component210} onClick={onComponent210Click}>
        <div className={styles.component210Child} />
        <div className={styles.subtraction1Parent}>
          <img
            className={styles.subtraction1Icon}
            alt=""
            src="../subtraction-1.svg"
          />
          <div className={styles.back}>Back</div>
        </div>
      </div>
      <img className={styles.logoIcon} alt="" src="../logo.svg" />
    </div>
  );
};

export default InUseAbsa;
