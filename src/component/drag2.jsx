import { useRef, useState } from "react";

const Drag2 = () => {
  const card = {
    todo: ["hii ashish", "what happen", "this is ashish"],
    "inn prograss": ["please pass data", "hellow bro what happen", "byy dude"],
    completed: ["projec done", "yes boss", "come bro"],
  };
  const [data, setData] = useState(card);

  const dragItem = useRef();
  const dragContent = useRef();
  const handleStart = (e, item, content) => {
    e.target.style.opacity = "0.5";
    dragItem.current = item;
    dragContent.current = content;
  };

  const handleEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, content) => {
    const item = dragItem.current;
    const content1 = dragContent.current;
    setData((prev) => {
      const newdata = { ...prev };
      newdata[content1] = newdata[content1].filter((e) => e !== item);
      newdata[content] = [...newdata[content], item];
      return newdata;
    });
  };

  const handleDelete=()=>{
    setData((prev) => {
      const newdata = { ...prev };
      newdata[dragContent.current] = newdata[dragContent.current].filter((e) => e !== dragItem.current);
      return newdata;
    });
  }


  const handleOver = (e) => {
    e.preventDefault();
  };

  ///add task
const [input,setInput]= useState("")
const [select,setSelect]=useState('')

  const handleInput =(e)=>{
    setInput( e.target.value)
  }

  const handleSelect=(e)=>{
    setSelect( e.target.value)
  }

  const handleAdd=()=>{
    if(input && select){
      setData((prev)=>({
        ...prev,
        [select]:[...prev[select],input]
      }))
      setInput('')
    }else{
      alert('select or fill the input')
    }
    
  }

  return (
    <>
      <div>
        <div className="create">
          <input type="text"  value={input} onChange={handleInput} />
          <select onChange={handleSelect}  value={select}>
          <option value="">Select Category</option>
            {Object.keys(data).map((content, ee) => (
              <option key={ee} value={content}>
                {content}
              </option>
            ))}
          </select>

          <button onClick={handleAdd}>click add</button>
        </div>
      </div>


      <div className="main">
        {Object.keys(data).map((content, index) => (
          <div
            onDrop={(e) => handleDrop(e, content)}
            onDragOver={handleOver}
            key={index}
            className="outer"
          >
            <h1>{content}</h1>
            {data[content].map((item, keys) => (
              <div
                onDragStart={(e) => handleStart(e, item, content)}
                onDragEnd={handleEnd}
                draggable
                key={keys}
                className="inner"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>


      <div 
      onDrop={handleDelete}
      onDragOver={handleOver}
      className="delete">
        <p>drop task</p>
      </div>
    </>
  );
};

export default Drag2;
