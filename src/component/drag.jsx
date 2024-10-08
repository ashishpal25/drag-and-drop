import {useRef, useState} from "react"

const Drag = ({data}) => {

    const [datas,setData]=useState(data)
   
    const dragItem=useRef()
    const dragContent=useRef()

    const handleStart= (e,item,content) =>{
        e.target.style.opacity="0.5"
        dragItem.current=item
        dragContent.current=content
       
    }
    const handleEnd= (e) =>{
        e.target.style.opacity="1"
    }

    const handleDrag=(e,content)=>{
const item=dragItem.current
const content1=dragContent.current
setData((prev)=>{
    const newdata={...prev}
    newdata[content1]=newdata[content1].filter((i)=>i !==item)
    newdata[content]=[...newdata[content],item]
    return newdata
    })
    }

    const handleOver=(e)=>{
e.preventDefault();
    }
  return (
    <div className="main">
     {Object.keys(datas).map((content,index)=>(
        <div key={index} 
        onDrop={(e)=>handleDrag(e,content)}
        onDragOver={handleOver}
        className="outer">
        <h1>{content}</h1>
        {datas[content].map((item,key)=>(
            <div 
            onDragStart={(e)=>handleStart(e,item,content)}
            onDragEnd={handleEnd}
            draggable key={key} className="inner">
                {item}
            </div>
        ))}
        </div>
        
     ))}
    </div>
  )
}

export default Drag
