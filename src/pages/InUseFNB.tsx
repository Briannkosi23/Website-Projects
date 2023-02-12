import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InUseFNB.module.css";

const InUseFNB: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent27Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.inUseFnb}>
      <div className={styles.inUseFnbChild} />
      <div className={styles.holdNearReader}>Hold near reader to pay</div>
      <div className={styles.fnbWrapper}>
        <div className={styles.fnb}>
          <div className={styles.fnb}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <img className={styles.fnbLogoIcon} alt="" src="../fnb-logo.svg" />
            <div className={styles.privateClientChequeContainer}>
              <b>Private Client</b>
              <span className={styles.cheque}> Cheque</span>
            </div>
            <div className={styles.customerDetails}>
              <div className={styles.div}>6005 9000 8000 4000</div>
              <div className={styles.div1}>2000</div>
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
          </div>
        </div>
      </div>
      <img
        className={styles.component102}
        alt=""
        src="../component-10--5.svg"
      />
      <div className={styles.component27} onClick={onComponent27Click}>
        <div className={styles.component27Child} />
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

export default InUseFNB;
