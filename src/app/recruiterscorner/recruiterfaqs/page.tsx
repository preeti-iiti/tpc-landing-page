


import Faq from "./faqUI/faq";
import styles from "./recruiterfaq.module.css"


export default function RecruiterFAQS() {
    return (
     <>


<div className={styles.wrapper}>

<div className={styles.unexpendable}>
      <div className={styles.title}>
      <div className="header2">Frequently Asked Questions <span className={styles.student}>By Recruiters</span> </div>  
        </div>

      <Faq ></Faq>

     </div>
     </div>
  
   
     </>
      
    );
  }
  