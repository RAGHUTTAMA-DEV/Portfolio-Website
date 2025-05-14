import gsap from "gsap"
import { useEffect, useRef } from "react";

export default function Gsap(){
     const box=useRef(null);
    
     useEffect(()=>{
       gsap.to(box.current, {duration:2, x:200, ease:"elastic.out", repeat:-1}  );
     },[])


     return (
        <div ref={box} style={{width:100,height:100,backgroundColor:'tomato'}}/>
     )
}