"use client";
import styles from "./portalform.module.css";
import Image from "next/image";
import Link from "next/link";
export default function PortalForm() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.unexpandable}>
          <div className={styles.info}>
            <h2>TRAINING AND PLACEMENT CELL</h2>
            <p>
              Training and Placement Cell IIT Indore, is the organization which
              handles all activities related to the campus placement of the
              graduating batch.
            </p>
          </div>
          <div className={styles.login}>
            <h1>TPC PORTAL </h1>
            <div className={styles.button}>
              <button
                onClick={() => {
                  window.location.href = "https://tpc.iiti.ac.in/login";
                }}
                className=" hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <div>{"PORTAL"}</div>
                <div>{"LOGIN"} </div>
              </button>

              <button
                onClick={() => {
                  window.location.href = "https://tpc.iiti.ac.in/JAF";
                }}
                className=" hover:scale-110 transition-all duration-300 ease-in-out"
              >
                <div>{"JAF"}</div>
                <div className=" uppercase">{"File a new JAF"}</div>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.lines1}></div>
        <div className={styles.lines2}></div>
        <div className={styles.lines3}></div>
      </div>
    </>
  );
}
