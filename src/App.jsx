
import './App.css'
import Drag from './component/drag'
import Drag2 from './component/drag2'
function App() {
  const card={
    todo:[
      "hii ashish",
      "what happen",
      "this is ashish"
    ],
    "inn prograss":[
      "please pass data",
      "hellow bro what happen",
      "byy dude"
    ],
    completed:[
      "projec done",
      "yes boss",
      "come bro"
    ]
  }

  return (
    <>
     {/* <Drag data={card}  /> */}
     <Drag2/>
    </>
  )
}

export default App
