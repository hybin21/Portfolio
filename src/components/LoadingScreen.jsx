import React, {useState, useEffect} from 'react'
const LoadingScreen = ({onComplete}) => {


    const [text,setText] = useState('');
    const fullText = "<Loading Jessica's Portfolio/>";
    useEffect(()=>{
        let index = 0;
        const interval = setInterval(()=>{
            setText(fullText.substring(0,index));
            index++;
            if(index > fullText.length){
                clearInterval(interval);
               setTimeout(() => {
                   onComplete();
               },100);
            }
        },100);
        return () => clearInterval(interval);
    },[onComplete])
    return (
        <div className = "fixed inset-0 z-50 bg-[#9c737c] text-gray-100 flex flex-col items-center justify-center">
            <div className = "mb-4 text-4xl font-mono font-bold ">
                {text} <span className = "animate-blink ml-1">|</span>
            </div>
            <div className = "w-[200px] h-[2px] bg-white rounded relative overflow-hidden">
                <div className= "w-[40%] h-full bg-[#7d4053] shadow-[0_0_15px_#db2777] animate-loading-bar"></div>
            </div>
        </div>
    )
}
export default LoadingScreen
