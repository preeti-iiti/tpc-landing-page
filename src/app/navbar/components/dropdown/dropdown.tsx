
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";

import Link from "next/link";
export default function DropdownUI(props: any) {

  return(

<Dropdown shouldBlockScroll={false} >
<DropdownTrigger>
  <Button 
    color= "default"
    variant="light"
    className="text-sm"

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
    
<DropdownItem  key={index} href={item.link} >{item.title}</DropdownItem>

  ))}

  
</DropdownMenu>
</Dropdown>



  );


}