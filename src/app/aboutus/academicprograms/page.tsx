"use client";

import styles from "./program.module.css";
import datacse from "./data/datacse.json";
import dataelec from "./data/dataelec.json";
import datamech from "./data/datamech.json";
import datacivil from "./data/datacivil.json";
import datametal from "./data/datametal.json";
import {
  Button,
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { Listbox, ListboxItem } from "@nextui-org/react";
import Image from "next/image";

export default function AcademicPrograms() {
  let tabs = [
    {
      id: "btech",
      label: "B.Tech",
      content:
        "B.Tech projects involve practical applications in various fields such as machine learning, computer vision, blockchain, natural language processing etc.",
    },
    {
      id: "mtech",
      label: "M.Tech",
      content:
        "M.Tech projects deal with quantum networking, DNN optimizers, Multimodal Sentiment Analysis, anomaly detection using GAN and network optimisation.",
    },
    {
      id: "ms",
      label: "MS(R)",
      content:
        "MS(R) students conduct pioneering research involving AI/ML, computer vision, natural language processing, pattern recognition, reinforcement learning, cryptography, network security, cloud computing and Blockchain technologies.",
    },
  ];
  let tabs2 = [
    {
      id: "msd",
      label: "MSD",
      content:
        "Theory of Elasticity, Finite Element Methods, Fracture Mechanics, Dynamics and Control Systems, Vibration and Noise Control.",
    },
    {
      id: "tes",
      label: "TES",
      content:
        "Non-conventional Energy Resources, Thermal Energy Storage, IC Engine Technology, Solar Energy Technology, Alternative Cooling Technologies.",
    },
    {
      id: "am",
      label: "AM",
      content:
        "Mechatronics and Metrology, Micro Precision Manufacturing, Technology of Surface Coatings, Smart Manufacturing, Additive Manufacturing, Theory of Advanced Manufacturing Processes.",
    },
    {
      id: "aolt",
      label: "AOLT",
      content:
        "Laser Material Processing, Laser Micro Machining and Measurement Techniques, Laser Physics, Biophotonics, Advanced Optics, Multiphysics Modelling",
    },
  ];

  return (
    <>
      <div className=" flex flex-col gap-[20px] items-start ">
        <div className=" flex justify-between w-[100%] ">
          <div className="header2">Academic Programs</div>
          
        </div>
      </div>
    </>
  );
}
