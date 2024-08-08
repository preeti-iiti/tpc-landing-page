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
          <div className=" flex ">
            <Link href="/aboutus/achievements">
              <Button
                isIconOnly
                className={` flex justify-center m-[5px] bg-transparent h-[3rem] w-[2rem] `}
              >
                <Image
                  src="/data/buttonspngs/medal.png"
                  width={30}
                  height={30}
                  alt="achievements"
                />
              </Button>
            </Link>
          </div>
        </div>

        <div className={`questitle `}> Computer Science and Engineering </div>

        <div className="para">{datacse.starter}</div>

        <div className="flex w-full flex-col ">
          <Tabs color="primary" aria-label="Dynamic tabs" items={tabs}>
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>
                    <div className="para"> {item.content}</div>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>

        <div className="para">{datacse.mid}</div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>{datacse.ug.title}</div>
        </Button>
        <div className={styles.grid}>
          {datacse.ug.data.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
            >
              {item}
            </div>
          ))}
          <Button
            color="danger"
            variant="light"
            className=" flex justify-center m-[5px] "
          >
            <div className={`para `}>etc</div>
          </Button>
        </div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>{datacse.pg.title}</div>
        </Button>
        <div className={styles.grid}>
          {datacse.pg.data.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
            >
              {item}
            </div>
          ))}
          <Button
            color="danger"
            variant="light"
            className=" flex justify-center m-[5px] "
          >
            <div className={`para `}>etc</div>
          </Button>
        </div>

        <div className={`questitle my-[5px]`}> Electrical Engineering </div>

        <div className="para">{dataelec.starter}</div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>{dataelec.title}</div>
        </Button>

        <div className=" para w-[100%]  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <Listbox className="overflow-visible" variant="faded">
            <ListboxItem key="1">
              <div className=" text-wrap">{dataelec.list[0]}</div>
            </ListboxItem>
            <ListboxItem key="2">
              <div className=" text-wrap">{dataelec.list[1]}</div>
            </ListboxItem>
            <ListboxItem key="3">
              <div className=" text-wrap">{dataelec.list[2]}</div>
            </ListboxItem>
            <ListboxItem key="4">
              <div className=" text-wrap">{dataelec.list[3]}</div>
            </ListboxItem>
            <ListboxItem key="5">
              <div className=" text-wrap">{dataelec.list[4]}</div>
            </ListboxItem>
            <ListboxItem key="6">
              <div className=" text-wrap">{dataelec.list[5]}</div>
            </ListboxItem>
          </Listbox>
        </div>

        <div className="para">{dataelec.end}</div>

        <div className={`questitle my-[5px]`}> Mechanical Engineering </div>
        <div className="para">{datamech.para1}</div>
        <div className="para">{datamech.para2}</div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>{datamech.title1}</div>
        </Button>

        <div className={styles.grid}>
          {datamech.list1.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
            >
              {item}
            </div>
          ))}
          <Button
            color="danger"
            variant="light"
            className=" flex justify-center m-[5px] "
          >
            <div className={`para `}>etc</div>
          </Button>
        </div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>{datamech.pgspecial}</div>
        </Button>

        <div className="flex w-full flex-col ">
          <Tabs
            color="primary"
            aria-label="Dynamic tabs"
            items={datamech.list2}
          >
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>
                    <div className={styles.grid}>
                      {item.content.map((item, index) => (
                        <div
                          key={index}
                          className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
                        >
                          {item}
                        </div>
                      ))}
                      <Button
                        color="danger"
                        variant="light"
                        className=" flex justify-center m-[5px] "
                      >
                        <div className={`para `}>etc</div>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>

        <div className="header3">{datamech.research.title}</div>

        <div className="para">{datamech.research.info}</div>
        <div className="header3">{datamech.colab.title}</div>

        <div className="para">{datamech.colab.info}</div>

        <div className="para">{datamech.end}</div>

        <div className={`questitle my-[5px]`}> Civil Engineering </div>

        <div className="para">{datacivil.starter}</div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>
            Top Courses Offered by the Department
          </div>
        </Button>

        <div className={styles.grid}>
          {datacivil.courses.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
            >
              {item}
            </div>
          ))}
          <Button
            color="danger"
            variant="light"
            className=" flex justify-center m-[5px] "
          >
            <div className={`para `}>etc</div>
          </Button>
        </div>

        <div className="header3">Skills and Soft Skills Development</div>

        <div className="para">{datacivil.mid}</div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>Technical Skills</div>
        </Button>

        <div className=" para w-[100%]  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <Listbox className="overflow-visible" variant="faded">
            <ListboxItem
              description={datacivil.technicalskillsdescription[0]}
              key="1"
            >
              <div className=" text-wrap">{datacivil.technicalskills[0]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.technicalskillsdescription[1]}
              key="2"
            >
              <div className=" text-wrap">{datacivil.technicalskills[1]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.technicalskillsdescription[2]}
              key="3"
            >
              <div className=" text-wrap">{datacivil.technicalskills[2]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.technicalskillsdescription[3]}
              key="4"
            >
              <div className=" text-wrap">{datacivil.technicalskills[3]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.technicalskillsdescription[4]}
              key="5"
            >
              <div className=" text-wrap">{datacivil.technicalskills[4]}</div>
            </ListboxItem>
          </Listbox>
        </div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>Soft Skills</div>
        </Button>

        <div className=" para w-[100%]  border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <Listbox className="overflow-visible" variant="faded">
            <ListboxItem
              description={datacivil.softskillsdescription[0]}
              key="1"
            >
              <div className=" text-wrap">{datacivil.softskills[0]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.softskillsdescription[1]}
              key="2"
            >
              <div className=" text-wrap">{datacivil.softskills[1]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.softskillsdescription[2]}
              key="3"
            >
              <div className=" text-wrap">{datacivil.softskills[2]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.softskillsdescription[3]}
              key="4"
            >
              <div className=" text-wrap">{datacivil.softskills[3]}</div>
            </ListboxItem>
            <ListboxItem
              description={datacivil.softskillsdescription[4]}
              key="5"
            >
              <div className=" text-wrap">{datacivil.softskills[4]}</div>
            </ListboxItem>
          </Listbox>
        </div>

        <div className={`questitle my-[5px]`}>
          {" "}
          Metallurgical Engineering & Material Science{" "}
        </div>

        <div className="para">{datametal.starter}</div>

        <div className="header3">{datametal.title}</div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>B Tech</div>
        </Button>

        <div className={styles.grid}>
          {datametal.listbtech.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
            >
              {item}
            </div>
          ))}
          <Button
            color="danger"
            variant="light"
            className=" flex justify-center m-[5px] "
          >
            <div className={`para `}>etc</div>
          </Button>
        </div>

        <Button color="danger" variant="light" size="lg">
          <div className={`para my-3 text-wrap`}>M Tech</div>
        </Button>

        <div className={styles.grid}>
          {datametal.listmtech.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
            >
              {item}
            </div>
          ))}
          <Button
            color="danger"
            variant="light"
            className=" flex justify-center m-[5px] "
          >
            <div className={`para `}>etc</div>
          </Button>
        </div>

        <div className="header3">{datametal.title2}</div>

        <div className={styles.grid}>
          {datametal.skills.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center m-[3px]   border-1 border-[#00000066] p-[10px] rounded-[20px] bg-white hover:bg-[#00000020]"
            >
              {item}
            </div>
          ))}
          <Button
            color="danger"
            variant="light"
            className=" flex justify-center m-[5px] "
          >
            <div className={`para `}>etc</div>
          </Button>
        </div>

        <div className=" flex w-[100%] justify-end">
          <Link href="https://academic.iiti.ac.in/index.php" target="_blank">
            <Button
              color="primary"
              variant="flat"
              radius="full"
              className="bg-gradient-to-tr w-[20rem] from-pink-500 to-yellow-500 text-white shadow-lg text-[1.5rem] h-[6rem] uppercase font-bold mt-[5rem]"
            >
              <div className=" flex flex-col justify-end">
                Explore More
                <div className=" text-[0.6rem]">IITI Academics</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
