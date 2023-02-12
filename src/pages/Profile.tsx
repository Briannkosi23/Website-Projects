import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent131Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onComponent28Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.profile}>
      <div className={styles.profileChild} />
      <div className={styles.component121}>
        <div className={styles.component121Child} />
      </div>
      <img className={styles.path1Icon} alt="" src="../path-1.svg" />
      <div className={styles.component141}>
        <div className={styles.component141Child} />
        <div className={styles.passwordVerification}>Password Verification</div>
      </div>
      <div className={styles.component131} onClick={onComponent131Click}>
        <div className={styles.component131Child} />
        <div className={styles.removeAllCards}>Remove All Cards</div>
      </div>
      <img className={styles.oldManIcon} alt="" src="../old-man@2x.png" />
      <div className={styles.nameParent}>
        <div className={styles.name}>Name</div>
        <div className={styles.emailAddress}>Email address</div>
        <div className={styles.shadrickSithole}>{`Shadrick Sithole `}</div>
        <div className={styles.shadricks25gmailcom}>ShadrickS25@gmail.com</div>
      </div>
      <div className={styles.briannkosiParent}>
        <div className={styles.briannkosi}>
          <b>BRIAN</b>
          <span className={styles.nkosi}>NKOSI</span>
        </div>
        <i className={styles.poweredBy}>Powered by</i>
      </div>
      <div className={styles.component28} onClick={onComponent28Click}>
        <div className={styles.component28Child} />
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

export default Profile;
