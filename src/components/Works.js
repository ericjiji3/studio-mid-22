import shadows1 from './creativeWorks/shadow.js';
import shadows2 from './creativeWorks/shadow2.js';
import shadows3 from './creativeWorks/shadow3.js';
import utility from './creativeWorks/utility.js';
import plasticIdentity from './creativeWorks/plastic.js';
import plasticIdentity2 from './creativeWorks/plastic2.js';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import arrow from '../../public/images/arrow.png';
import close from '../../public/images/close.png';

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
            props.closeModal('');
            setIndex(0);
        }
    }
    function closeButton(){
        setActive(false);
        props.closeModal('');
        setIndex(0);
    }
    if(props.workName == "SS1"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                    <Image className="close" onClick={()=>closeButton()} src={close} alt="oops"/>
                    {
                        shadows1.map((work, key) => {
                            
                            return(
                                <div className={index==key ? 'work-container active' : 'work-container'} key={key}>
                                    <Image 
                                        src={work.src}
                                        width={400}
                                        height={600}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <Image className="prev" onClick={()=>{prev(shadows1)}} src={arrow} alt="oops"/>
                        <Image className="next" onClick={()=>{next(shadows1)}} src={arrow} alt="oops"/>
                    </div>
                </div>
            </div>
        )
    } else if(props.workName == "Utility"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                <Image className="close" onClick={()=>closeButton()} src={close} alt="oops"/>
                    {
                        utility.map((work, key2) => {
                            return(
                                <div className={index==key2 ? 'work-container active' : 'work-container'} key={key2}>
                                    <Image 
                                        src={work.src}
                                        width={400}
                                        height={600}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <Image className="prev" onClick={()=>{prev(utility)}} src={arrow} alt="oops"/>
                        <Image className="next" onClick={()=>{next(utility)}} src={arrow} alt="oops"/>
                    </div>
                </div>
            </div>
        )
    } else if(props.workName == "SS2"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                <Image className="close" onClick={()=>closeButton()} src={close} alt="oops"/>
                    {
                        shadows2.map((work, key3) => {
                            return(
                                <div className={index==key3 ? 'work-container active' : 'work-container'} key={key3}>
                                    <Image 
                                        src={work.src}
                                        width={400}
                                        height={600}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <Image className="prev" onClick={()=>{prev(shadows2)}} src={arrow} alt="oops"/>
                        <Image className="next" onClick={()=>{next(shadows2)}} src={arrow} alt="oops"/>
                    </div>
                </div>
            </div>
        )
    } else if(props.workName == "SS3"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                <Image className="close" onClick={()=>closeButton()} src={close} alt="oops"/>
                    {
                        shadows3.map((work, key4) => {
                            return(
                                <div className={index==key4 ? 'work-container active' : 'work-container'} key={key4}>
                                    <Image 
                                        src={work.src}
                                        width={400}
                                        height={600}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <Image className="prev" onClick={()=>{prev(shadows3)}} src={arrow} alt="oops"/>
                        <Image className="next" onClick={()=>{next(shadows3)}} src={arrow} alt="oops"/>
                    </div>
                </div>
            </div>
        )
    } else if(props.workName == "PI1"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                <Image className="close" onClick={()=>closeButton()} src={close} alt="oops"/>
                    {
                        plasticIdentity.map((work, key5) => {
                            return(
                                <div className={index==key5 ? 'work-container active' : 'work-container'} key={key5}>
                                    <Image 
                                        src={work.src}
                                        width={400}
                                        height={600}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <Image className="prev" onClick={()=>{prev(plasticIdentity)}} src={arrow} alt="oops"/>
                        <Image className="next" onClick={()=>{next(plasticIdentity)}} src={arrow} alt="oops"/>
                    </div>
                </div>
            </div>
        )
    }  else if(props.workName == "PI2"){
        return(
            <div className={active ? "works active" : "works"} onClick={(e)=>closeModal(e)}>
                <div className="modal" ref={innerMod}>
                <Image className="close" onClick={()=>closeButton()} src={close} alt="oops"/>
                    {
                        plasticIdentity2.map((work, key6) => {
                            return(
                                <div className={index==key6 ? 'work-container active' : 'work-container'} key={key6}>
                                    <Image 
                                        src={work.src}
                                        width={400}
                                        height={600}
                                        alt="oops"
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="buttons">
                        <Image className="prev" onClick={()=>{prev(plasticIdentity2)}} src={arrow} alt="oops"/>
                        <Image className="next" onClick={()=>{next(plasticIdentity2)}} src={arrow} alt="oops"/>
                    </div>
                </div>
            </div>
        )
    }
    
}