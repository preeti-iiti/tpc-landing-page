"use client"

import React from "react";
import useState from "react";
import {Input,Button} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import styles from "./admin.module.css";
import Link from "next/link";

export default function AdminLogin() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return(

<>




        <div className={styles.background}>


        <div className={styles.grid}>
                            <div className={styles.bganim}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>
                            <div className={styles.gridblock}></div>

                            </div>


        <div className={styles.content}>

         <div className={styles.title}>
        <div className={styles.header2}>Admin Login</div>  
        </div>

        <div className={styles.form}>

        <Input type="username"  isClearable label="Username" color="default" variant="flat" size="md" className="w-[80%] to-blue-500" radius="sm" />
        <Input label="Password" variant="flat" radius="sm" color="default" endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button> } type={isVisible ? "text" : "password"} className=" w-[80%]" size="md"/>

        </div>

      <Link href="/admin/dashboard" className="w-[100%] flex justify-center">
        <Button radius="sm" color="primary" variant="ghost" size="lg" className=" w-[80%]" >
        Login
      </Button> 
    </Link>


        
        </div>


</div>
        


    



    



</>


    );

}