import React from 'react';
import PieChart from './chart';
import { ChartData } from 'chart.js';
import styles from './page.module.css';
import departmentData from './data.json';
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const createChartData = (labels: string[], data: number[]): ChartData<'pie'> => {
  return {
    labels,
    datasets: [
      {
        label: 'Number of Students',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Soft Red
          'rgba(54, 162, 235, 0.6)', // Soft Blue
          'rgba(255, 206, 86, 0.6)', // Soft Yellow
          'rgba(75, 192, 192, 0.6)', // Soft Green
          'rgba(153, 102, 255, 0.6)', // Soft Purple
          'rgba(255, 159, 64, 0.6)', // Soft Orange
        ],
        
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        hoverBorderWidth: 4,
        hoverBorderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };
};

const Demographics: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className='header1'>Demographics</div>
      <div className={styles.container}>
        {departmentData.departmentData.map((dept, index) => (
          <div key={index} className={styles.department}>
            <div className=' flex justify-between items-center'>
            <h2 className=' questitle'>{dept.departmentName}</h2>
            <div className=" flex ">
          <Link href="/aboutus/achievements">
            <Button isIconOnly  className={` flex justify-center m-[5px] bg-transparent h-[3rem] w-[2rem] `}>
              <Image src="/data/buttonspngs/medal.png" width={30} height={30} alt="achievements"/>
            </Button>
          </Link>
        </div>
        </div>
            <PieChart data={createChartData(dept.pieLabels.labels, dept.pieLabels.data)} />
            <ul>
              {dept.labels.map((label, idx) => (
                <li key={idx}><span>{label}</span>: {dept.data[idx]}</li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demographics;