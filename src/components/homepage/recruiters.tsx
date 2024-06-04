import styles from "@/css/recruiters.module.css";





export default function Recruiters(props: any) {




  return (

    <>

<div className={styles.wrapper}>

<div className={styles.unexpandable}>

      <button className={styles.button}>OUR RECRUITERS</button>

     <div className={styles.catalog}>
     
      {

        props.logos.map((logo: any , index :any) => {
          return (
            <div className={styles.logos} key={index}>
              <img src={logo} alt={logo.alt} key={index} />
            </div>  
          );

        }

      )};
      

      </div>  
      </div>

      </div>
    </>
 
    )
}
