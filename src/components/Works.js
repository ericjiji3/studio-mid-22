import shadows1 from './creativeWorks/shadow.js';
import utility from './creativeWorks/utility.js';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';

export default function Works(props){
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState(true);
    const innerMod = useRef(null);

    useEffect(()=>{
        if(props.workName != ''){
            setActive(true);
        }
    },[props.workName])
    function prev(imageList){
        if(index == 0){
            setIndex(imageList.length - 1);
        }else{
            setIndex(index-1);
        }
    }

    function next(imageList){
        if(index == imageList.length - 1){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }
    function closeModal(e){
        e.preventDefault();
        if(innerMod.current && !innerMod.current.contains(e.target)){
            setActive(false);
        }
    }
    if(props.workName == "PI1"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                    
                    {
                        shadows1.map((work, key) => {
                            console.log(work);
                            return(
                                <div className={index==key ? 'work-container active' : 'work-container'} data-key={key}>
                                    <Image 
                                        src={work.src}
                                        width={300}
                                        height={500}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <span onClick={()=>{prev(shadows1)}}>left</span>
                        <span onClick={()=>{next(shadows1)}}>right</span>
                    </div>
                </div>
            </div>
        )
    } else if(props.workName == "Utility"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                    
                    {
                        utility.map((work, key) => {
                            console.log(work);
                            return(
                                <div className={index==key ? 'work-container active' : 'work-container'} data-key={key}>
                                    <Image 
                                        src={work.src}
                                        width={300}
                                        height={500}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <span onClick={()=>{prev(utility)}}>left</span>
                        <span onClick={()=>{next(utility)}}>right</span>
                    </div>
                </div>
            </div>
        )
    }
    
}