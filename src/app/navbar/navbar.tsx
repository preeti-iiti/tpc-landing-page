"use client"
import React from "react";
import useState from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import styles from "./navbar.module.css"
import Image from "next/image";

export default function NavbarUI(props:any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    // <div className={styles.wrapper}>
    // <div className={styles.unexpendable}>
    

    
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered={true} >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className={styles.logo}>
           <Link href="/"><Image width={50} height={50} src={props.logo} alt="iit indore" className={styles.iitilogo} /></Link>
          <div className={styles.name}>
             <div className={styles.tpc}><Link href="/"><span className={styles.hindi}>प्रशिक्षण एवं नियोजन कक्ष</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Training and Placement Cell</span></Link></div>
             <div className={styles.iiti}><Link href="/"><span className={styles.hindi}>भारतीय प्रौद्योगिकी संस्थान, इंदौर</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Indian Institute of technology, Indore</span></Link></div>
           </div>
         </div>
        
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    //  </div>
    //  </div>
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

//         <div className={styles.logo}>
//           <Link href="/"><Image width={50} height={50} src={props.logo} alt="iit indore" className={styles.iitilogo} /></Link>
//           <div className={styles.name}>
//             <div className={styles.tpc}><Link href="/"><span className={styles.hindi}>प्रशिक्षण एवं नियोजन कक्ष</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Training and Placement Cell</span></Link></div>
//             <div className={styles.iiti}><Link href="/"><span className={styles.hindi}>भारतीय प्रौद्योगिकी संस्थान, इंदौर</span></Link><span className={styles.partition}> | </span><Link href="/"><span className={styles.english}>Indian Institute of technology, Indore</span></Link></div>
//           </div>
//         </div>

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
