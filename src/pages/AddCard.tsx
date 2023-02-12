import { FunctionComponent } from "react";
import styles from "./AddCard.module.css";

const AddCard: FunctionComponent = () => {
  return (
    <div className={styles.addCard}>
      <div className={styles.addCardChild} />
      <img
        className={styles.olenaSergienkoDimjwlx1ybeUnIcon}
        alt=""
        src="../olenasergienkodimjwlx1ybeunsplash@2x.png"
      />
      <div className={styles.addCardItem} />
      <img
        className={styles.olenaSergienkoDimjwlx1ybeUnIcon1}
        alt=""
        src="../olenasergienkodimjwlx1ybeunsplash1@2x.png"
      />
      <b className={styles.addCard1}>Add Card</b>
      <div className={styles.placeYourCreditContainer}>
        <p
          className={styles.placeYourCredit}
        >{`Place your credit or Debit Card inside the `}</p>
        <p className={styles.placeYourCredit}>{`Frame to scan it. `}</p>
      </div>
      <div className={styles.addCardDetails}>Add Card details Manually</div>
    </div>
  );
};

export default AddCard;
