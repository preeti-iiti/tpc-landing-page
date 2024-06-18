
import {Image} from "@nextui-org/image";

export default function List(props:any) {

    return (

        <div>

     

{props.achieve.map((item:any, index:any) => (

<div  className=" flex my-9 gap-[2rem] items-center border-[#D1B464] border-[1px] rounded-lg p-9 group hover:bg-[#d1b464b4] ">

<div className=" min-w-[40px]">
<Image  src={props.medal} width={30} className=" group-hover:scale-[2] group-hover:brightness-[120%] "/></div>
<div className="para uppercase " style={{textAlign: "left"}}>
        {item}
    </div>


</div>

))}

        </div>


    );


}