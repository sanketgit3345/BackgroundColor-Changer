import {useState} from "react"

function App() {
  const [color, setColor] = useState("white")
  // function getcolor(){
    
  //    setColor("red")
     
  // }
  return (
    <>
      <div className="w-full h-screen duration-100" 
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2" >
          <button onClick={()=>setColor("red")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" style={{backgroundColor:"red"}}>RED</button>
          <button onClick={()=>setColor("green")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" style={{backgroundColor:"green"}}>GREEN</button>
          <button onClick={()=>setColor("blue")} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" style={{backgroundColor:"blue"}}>BLUE</button>
        </div>
        
      </div>
    </>
  )
}

export default App
