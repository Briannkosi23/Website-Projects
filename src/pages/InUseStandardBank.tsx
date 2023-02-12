import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InUseStandardBank.module.css";

const InUseStandardBank: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent211Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.inUseStandardBank}>
      <div className={styles.inUseStandardBankChild} />
      <div className={styles.holdNearReader}>Hold near reader to pay</div>
      <div className={styles.standardBankWrapper}>
        <div className={styles.standardBank}>
          <div className={styles.standardBank}>
            <div className={styles.standardBankPersonalChild} />
            <img
              className={styles.nedbankLogo2022}
              alt=""
              src="../nedbank-logo-2022.svg"
            />
            <div className={styles.rfidChip}>
              <div className={styles.rfidChipChild} />
              <div className={styles.rfidChipItem} />
              <div className={styles.rfidChipInner} />
              <div className={styles.lineDiv} />
              <div className={styles.rfidChipChild1} />
              <div className={styles.rfidChipChild2} />
            </div>
            <img
              className={styles.standardBankLogo}
              alt=""
              src="../standard-bank-logo.svg"
            />
            <div className={styles.customerDetails}>
              <div className={styles.parent}>
                <div className={styles.div}>6005 9000 8000 4000</div>
                <div className={styles.div1}>2000</div>
              </div>
              <div className={styles.mrSSithole}>MR S. SITHOLE</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component105}
        alt=""
        src="../component-10--5.svg"
      />
      <div className={styles.component211} onClick={onComponent211Click}>
        <div className={styles.component211Child} />
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

export default InUseStandardBank;
