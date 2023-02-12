import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Splash.module.css";

const Splash: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSplashContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.splash} onClick={onSplashContainerClick}>
      <img className={styles.splashChild} alt="" src="../group-11.svg" />
      <img className={styles.logoIcon} alt="" src="../logo7.svg" />
    </div>
  );
};

export default Splash;
