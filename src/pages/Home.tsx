import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDumbStandardContainerClick = useCallback(() => {
    navigate("/in-use-standard-bank");
  }, [navigate]);

  const onDumbABSAContainerClick = useCallback(() => {
    navigate("/in-use-absa");
  }, [navigate]);

  const onDumbFNBContainerClick = useCallback(() => {
    navigate("/in-use-fnb");
  }, [navigate]);

  const onDumbNedbankContainerClick = useCallback(() => {
    navigate("/in-use-nedbank");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <img className={styles.union2Icon} alt="" src="../union-2.svg" />
      <b className={styles.slideLeftOr}>Slide left or Right to select Card</b>
      <img className={styles.logoIcon} alt="" src="../logo6.svg" />
      <div className={styles.scrollGroup4}>
        <div className={styles.dumbStandardParent}>
          <div
            className={styles.dumbStandard}
            onClick={onDumbStandardContainerClick}
          >
            <div className={styles.dumbStandardChild} />
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
          <div className={styles.dumbAbsa} onClick={onDumbABSAContainerClick}>
            <div className={styles.dumbAbsaChild} />
            <img
              className={styles.absaLogo2022}
              alt=""
              src="../absa-logo-2022.svg"
            />
            <div className={styles.customerDetails1}>
              <div className={styles.parent}>
                <div className={styles.div}>6005 9000 8000 4000</div>
                <div className={styles.div1}>2000</div>
              </div>
              <div className={styles.mrSSithole}>MR S. SITHOLE</div>
            </div>
            <div className={styles.rfidChip1}>
              <div className={styles.rfidChipChild} />
              <div className={styles.rfidChipItem} />
              <div className={styles.rfidChipInner} />
              <div className={styles.lineDiv} />
              <div className={styles.rfidChipChild1} />
              <div className={styles.rfidChipChild2} />
            </div>
            <div className={styles.personalDebit}>Personal Debit</div>
          </div>
          <div className={styles.dumbFnb} onClick={onDumbFNBContainerClick}>
            <div className={styles.background}>
              <div className={styles.backgroundChild} />
            </div>
            <img className={styles.fnbLogoIcon} alt="" src="../fnb-logo.svg" />
            <div className={styles.privateClientChequeContainer}>
              <b>Private Client</b>
              <span className={styles.cheque}> Cheque</span>
            </div>
            <div className={styles.customerDetails2}>
              <div className={styles.parent}>
                <div className={styles.div}>6005 9000 8000 4000</div>
                <div className={styles.div1}>2000</div>
              </div>
              <div className={styles.mrSSithole}>MR S. SITHOLE</div>
            </div>
            <img
              className={styles.rfidChipIcon}
              alt=""
              src="../rfid-chip.svg"
            />
          </div>
          <div
            className={styles.dumbNedbank}
            onClick={onDumbNedbankContainerClick}
          >
            <div className={styles.dumbNedbankChild} />
            <div className={styles.customerDetails3}>
              <div className={styles.parent}>
                <div className={styles.div}>6005 9000 8000 4000</div>
                <div className={styles.div1}>2000</div>
              </div>
              <div className={styles.mrSSithole3}>MR S. SITHOLE</div>
            </div>
            <img
              className={styles.nedbankLogo20221}
              alt=""
              src="../nedbank-logo-20221.svg"
            />
            <div className={styles.rfidChip1}>
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
            <div className={styles.dumbNedbankItem} />
          </div>
          <div className={styles.r3556897Parent}>
            <b className={styles.r3556897}>R35 568.97</b>
            <b className={styles.r1875505}>R18 755.05</b>
            <div className={styles.available}>Available</div>
            <div className={styles.balance}>Balance</div>
          </div>
          <div className={styles.r3556897Group}>
            <b className={styles.r3556897}>R35 568.97</b>
            <b className={styles.r18755051}>R18 755.05</b>
            <div className={styles.available1}>Available</div>
            <div className={styles.balance1}>Balance</div>
          </div>
          <div className={styles.r3556897Container}>
            <b className={styles.r3556897}>R35 568.97</b>
            <b className={styles.r18755051}>R18 755.05</b>
            <div className={styles.available1}>Available</div>
            <div className={styles.balance1}>Balance</div>
          </div>
          <div className={styles.r3556897Parent1}>
            <b className={styles.r3556897}>R35 568.97</b>
            <b className={styles.r18755051}>R18 755.05</b>
            <div className={styles.available1}>Available</div>
            <div className={styles.balance1}>Balance</div>
          </div>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
        </div>
      </div>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <img
        className={styles.homeInner}
        alt=""
        src="../ellipse-6.svg"
        onClick={onEllipseClick}
      />
      <div className={styles.scrollGroup5}>
        <div className={styles.topssparParent}>
          <div className={styles.topsspar}>TOPS@SPAR</div>
          <b className={styles.r285505}>- R2 855.05</b>
          <b className={styles.fnbCheque}>FNB Cheque - Today</b>
        </div>
        <div className={styles.kwaMaiMaiParent}>
          <div className={styles.topsspar}>Kwa Mai-Mai</div>
          <b className={styles.r285505}>- R280.77</b>
          <b className={styles.fnbCheque}>FNB Cheque - Today</b>
        </div>
        <div className={styles.transferParent}>
          <div className={styles.topsspar}>Transfer</div>
          <b className={styles.r1000000}>R10 000.00</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Today</b>
        </div>
        <div className={styles.makroParent}>
          <div className={styles.topsspar}>MAKRO</div>
          <b className={styles.r285505}>- R8 970.60</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Yesterday</b>
        </div>
        <div className={styles.easyequitiesParent}>
          <div className={styles.topsspar}>EasyEquities</div>
          <b className={styles.r285505}>- R50 000.00</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Yesterday</b>
        </div>
        <div className={styles.checkersParent}>
          <div className={styles.topsspar}>Checkers</div>
          <b className={styles.r285505}>- R435.60</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Yesterday</b>
        </div>
        <div className={styles.cashbuildParent}>
          <div className={styles.topsspar}>CashBuild</div>
          <b className={styles.r285505}>- R12 340.00</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Yesterday</b>
        </div>
        <div className={styles.budgetInsuranceParent}>
          <div className={styles.topsspar}>{`Budget Insurance `}</div>
          <b className={styles.r285505}>- R3 000.00</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Yesterday</b>
        </div>
        <div className={styles.goldWagonParent}>
          <div className={styles.topsspar}>Gold Wagon</div>
          <b className={styles.r285505}>- R7 832.00</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Yesterday</b>
        </div>
        <div className={styles.spccParent}>
          <div className={styles.topsspar}>SPCC</div>
          <b className={styles.r285505}>- R3 956.78</b>
          <b className={styles.fnbCheque}>Nedbank Cheque - Yesterday</b>
        </div>
      </div>
      <b className={styles.allTransactions}>All transactions</b>
      <img className={styles.oldManIcon} alt="" src="../old-man2@2x.png" />
    </div>
  );
};

export default Home;
