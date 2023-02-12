import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InUseNedbank.module.css";

const InUseNedbank: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent29Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.inUseNedbank}>
      <div className={styles.inUseNedbankChild} />
      <div className={styles.holdNearReader}>Hold near reader to pay</div>
      <div className={styles.nedbankWrapper}>
        <div className={styles.nedbank}>
          <div className={styles.nedbank}>
            <div className={styles.nedbankPrivateClientChild} />
            <div className={styles.customerDetails}>
              <div className={styles.parent}>
                <div className={styles.div}>6005 9000 8000 4000</div>
                <div className={styles.div1}>2000</div>
              </div>
              <div className={styles.mrSSithole}>MR S. SITHOLE</div>
            </div>
            <img
              className={styles.nedbankLogo2022}
              alt=""
              src="../nedbank-logo-20221.svg"
            />
            <div className={styles.rfidChip}>
              <div className={styles.rfidChipChild} />
              <div className={styles.rfidChipItem} />
              <div className={styles.rfidChipInner} />
              <div className={styles.lineDiv} />
              <div className={styles.rfidChipChild1} />
              <div className={styles.rfidChipChild2} />
            </div>
            <div className={styles.privateClientsParent}>
              <div className={styles.privateClients}>Private Clients</div>
              <div className={styles.creditDebit}>credit - debit</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component103}
        alt=""
        src="../component-10--5.svg"
      />
      <div className={styles.component29} onClick={onComponent29Click}>
        <div className={styles.component29Child} />
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

export default InUseNedbank;
