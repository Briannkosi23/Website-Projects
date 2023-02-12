import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile1.module.css";

const Profile1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent26Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onComponent132Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onComponent133Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.profile1}>
      <div className={styles.profile1Child} />
      <div className={styles.component121}>
        <div className={styles.component121Child} />
      </div>
      <img className={styles.path1Icon} alt="" src="../path-1.svg" />
      <div className={styles.component141}>
        <div className={styles.component141Child} />
        <div className={styles.passwordVerification}>Password Verification</div>
      </div>
      <div className={styles.component131}>
        <div className={styles.component131Child} />
        <div className={styles.removeAllCards}>Remove All Cards</div>
      </div>
      <img className={styles.logoIcon} alt="" src="../logo.svg" />
      <img className={styles.oldManIcon} alt="" src="../old-man@2x.png" />
      <div className={styles.component26} onClick={onComponent26Click}>
        <div className={styles.component26Child} />
        <div className={styles.subtraction1Parent}>
          <img
            className={styles.subtraction1Icon}
            alt=""
            src="../subtraction-1.svg"
          />
          <div className={styles.back}>Back</div>
        </div>
      </div>
      <div className={styles.nameParent}>
        <div className={styles.name}>Name</div>
        <div className={styles.emailAddress}>Email address</div>
        <div className={styles.shadrickSithole}>{`Shadrick Sithole `}</div>
        <div className={styles.shadricks25gmailcom}>ShadrickS25@gmail.com</div>
      </div>
      <div className={styles.profile1Item} />
      <img className={styles.path108Icon} alt="" src="../path-108.svg" />
      <b className={styles.areYouSureContainer}>
        <p className={styles.areYouSure}>Are you sure you want</p>
        <p className={styles.areYouSure}>delete all cards?</p>
      </b>
      <div className={styles.component132} onClick={onComponent132Click}>
        <div className={styles.component131Child} />
        <div className={styles.yes}>Yes</div>
      </div>
      <div className={styles.component133} onClick={onComponent133Click}>
        <img className={styles.path109Icon} alt="" src="../path-109.svg" />
        <div className={styles.no}>No</div>
      </div>
    </div>
  );
};

export default Profile1;
