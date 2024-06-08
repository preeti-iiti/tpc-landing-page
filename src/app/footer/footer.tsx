import styles from "./footer.module.css"


export default function Footer(props: any) {
  return (
    <>

      <div className={styles.wrapper}>

        <div className={styles.unexpendable}>

          <div className={styles.all}>

          
            <div className={styles.text}>

            <div className={styles.section}>
            <span className={styles.textheader}>Quick Links</span>
            <div className={styles.textcontent}>
                {props.quicklinks.map((val: any,index:any)=>{
                  return <div className={styles.links} key={index}>{val.title}</div>;
                })}
              </div>
            </div>

            <div className={styles.section}>
            <span className={styles.textheader}>Contact</span>
            <div className={styles.textcontent}>
                {props.contact.map((val: any,index:any)=>{
                  return <div className={styles.block} key={index}><div>{val.description}</div></div> ;
                })}
              </div>
            

            </div>



            

            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.330526493356!2d75.92317729999999!3d22.529287999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efb7df4ad60b%3A0xb51ea33269875e24!2sIIT%20Indore%20Simrol%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717103018656!5m2!1sen!2sin" width="340" height="260"  loading="lazy"  className={styles.googlemap}></iframe>


          </div>

          <div className={styles.connect}>
            <span className={styles.stay}>STAY CONNECTED</span>
            <div className={styles.socialmedia}>

            {props.stayconnected.map((val: any, index:any)=>{
              return <div key={index} ><a href={val.link} target="_blank"><img src={val.logo} alt={val.title} className={styles.logos}></img></a></div>
          })}
            
            </div>

          </div>

          <div className={styles.copyright}>
           {props.copyright }
          </div>



        </div>
        <div className={styles.finishergrad}>
        </div>
      </div>


    </>

  );
}
