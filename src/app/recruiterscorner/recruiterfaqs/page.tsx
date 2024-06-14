


import Faq from "./faqUI/faq";
import styles from "./studentfaq.module.css"


export default function RecruiterFAQS() {
    return (
     <>


<div className={styles.wrapper}>

<div className={styles.unexpendable}>
      <div className={styles.title}>
        <div className="header1">Frequently Asked Questions</div>  <div className={styles.student}>By Recruiters</div>
        </div>

      <Faq ></Faq>

     </div>
     </div>
  
   
     </>
      
    );
  }
  