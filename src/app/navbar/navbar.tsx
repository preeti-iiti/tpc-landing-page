"use client"
import React from "react";
import useState from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown} from "@nextui-org/react";
import styles from "./navbar.module.css"
import Image from "next/image";
import Drop from "./components/dropdown/dropdown"

export default function NavbarUI(props:any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
 


    
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered={true} className=" w-full overflow-hidden h-[5rem] justify-center">
      <NavbarContent justify="start" className=" overflow-hidden ">
        
      

 <Link href="/"><Image width={50} height={50} src={props.logo} alt="iit indore" className={styles.iitilogo} /></Link>
 {/* <div className="flex"><Link href="/"><span className={styles.hindi}>प्रशिक्षण एवं नियोजन कक्ष</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Training and Placement Cell</span></Link></div> */}

      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-1" justify="center">
      {props.buttons.map((item:any, index:any) => (

          <NavbarMenuItem key={`${item}-${index}`}>
           
           {item.isdrop ? <Drop {...item}>{item.title}</Drop> : <Button 
          color= "default"
          variant="light"
          
        >
     <Link href={item.link} className=" text-sm" >
     
          <div className=" text-gray-950">{item.title}</div>
          </Link>
        </Button>}
              
          
          </NavbarMenuItem>
        ))}

        
      </NavbarContent>

      
      {/* <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        
      </NavbarContent>


      <NavbarMenu >

      {props.buttons.map((item:any, index:any) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              
              className="w-full"
              href="#"
              size="lg"
              >

              <div className=" capitalize">{item.title}</div>
            </Link>



          </NavbarMenuItem>
        ))}


      </NavbarMenu>
    </Navbar>

   
  
  );
}





// "use client"

// import React, { useState, useEffect, useRef } from 'react'
// import Image from 'next/image'
// import Dropdown from "./components/dropdown/dropdown"

// export default function Navbar(props: any) {




//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.unexpendable}>

        // <div className={styles.logo}>
        //   <Link href="/"><Image width={50} height={50} src={props.logo} alt="iit indore" className={styles.iitilogo} /></Link>
        //   <div className={styles.name}>
        //     <div className={styles.tpc}><Link href="/"><span className={styles.hindi}>प्रशिक्षण एवं नियोजन कक्ष</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Training and Placement Cell</span></Link></div>
        //     <div className={styles.iiti}><Link href="/"><span className={styles.hindi}>भारतीय प्रौद्योगिकी संस्थान, इंदौर</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Indian Institute of technology, Indore</span></Link></div>
        //   </div>
        // </div>

//         <div className={styles.modals}>
//           <ul>
//             {props.buttons.map((val: any, index: any) => {
//               {
//                   let abc = val.ismodal
//                   if (abc) {
//                     return <>
                    
//                     <li className={styles.modalbutton} key={index}>
//                       <div className={styles.headlink}>
//                      {val.title}
//                       <Image src={val.modalbutton} width={4} height={4} className={styles.dropdown} alt="\/" />
//                       </div>
//                       <div className={styles.droplist}>
//                       <Dropdown {...val}  />
//                       </div>
//                     </li>
//                     </>
                   
//                   }
//                   else {
//                     return <li className={styles.modalbutton} key={index}><Link href="/">{val.title}</Link></li>
//                   }

//               }})}
//           </ul>
//         </div>

//         <div className={styles.menu}>
//           <div className={styles.topbar}></div>
//           <div className={styles.midbar}></div>
//           <div className={styles.lowbar}></div>
//         </div>



//       </div>
//     </div>

//   );
// }
