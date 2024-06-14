
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";
import styles from "./dropdown.module.css";

import Link from "next/link";
export default function DropdownUI(props: any) {

  return(

<Dropdown shouldBlockScroll={false} >
<DropdownTrigger>
  <Button 
    color= "primary"
    variant="light"
    className="text-sm hover:font-bold"

  >
    {props.children}
  </Button>
</DropdownTrigger>
<DropdownMenu 
  aria-label="Dropdown Variants"
  color= "default"
    variant="light"
     
>

{props.drop.map((item:any, index:any) => (
    
<DropdownItem className={styles.menuitem}  key={index} href={item.link} target={item.target} >{item.title}</DropdownItem>

  ))}

  
</DropdownMenu>
</Dropdown>



  );


}