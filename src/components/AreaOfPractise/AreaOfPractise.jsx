import React from "react";
import styles from "./AreaOfPractise.module.css";
import BUSINESS_LAW from "../../assets/BUSINESS_LAW.png";
import PARTNERSHIP_LAW from "../../assets/PARTNERSHIP_LAW.png";
import REAL_ESTATE_LAW from "../../assets/REAL_ESTATE_LAW.png";
import BUSINESS_LAW_1 from "../../assets/BUSINESS_LAW_1.png";
import LANDLORD_DISPUTES from "../../assets/LANDLORD_DISPUTES.png";
import ELDER_ABUSE from "../../assets/ELDER_ABUSE.png";

const AreaOfPractise = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mainHeading}>Area of Practices</p>
      <div className={styles.SecondWrapper}>
        <div className={styles.imageRowWrapper}>
          <div className={styles.parentWeapper}>
            <img src={BUSINESS_LAW} alt="BUSINESS_LAW" />
            <p className={styles.imageText}>Business law</p>
          </div>
          <div className={styles.parentWeapper}>
            <img src={PARTNERSHIP_LAW} alt="PARTNERSHIP_LAW" />
            <p className={styles.imageText}>Partnership Law</p>
          </div>
        </div>
        <div className={styles.imageRowWrapper}>
          <div className={styles.parentWeapper}>
            <img src={REAL_ESTATE_LAW} alt="REAL_ESTATE_LAW" />
            <p className={styles.imageText}>Real estate law</p>
          </div>
          <div className={styles.parentWeapper}>
            <img src={BUSINESS_LAW_1} alt="BUSINESS_LAW_1" />
            <p className={styles.imageText}>Business law</p>
          </div>
        </div>
        <div className={styles.imageRowWrapper}>
          <div className={styles.parentWeapper}>
            <img src={LANDLORD_DISPUTES} alt="LANDLORD_DISPUTES" />
            <p className={styles.imageText}>Landlord disputes</p>
          </div>
          <div className={styles.parentWeapper}>
            <img src={ELDER_ABUSE} alt="ELDER_ABUSE" />
            <p className={styles.imageText}>Elder abuse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfPractise;
