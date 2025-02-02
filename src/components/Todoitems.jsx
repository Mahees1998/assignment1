import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";


const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer" >

     { isComplete ? <TiTick style={{fontSize:'2rem'}}  className='bg-orange-600  rounded-full'/> : <FaRegCircle 
     style={{fontSize: '2rem'}} />}   


        <p className={`text-slate-700 ml-4 text-[17px]" decoration-slate-500 ${isComplete ? "line-through" : ""}`}> {text} </p>
      </div>

      <MdDelete onClick={()=>{deleteTodo(id)}} style={{fontSize:'2rem'}} className="cursor-pointer" />
    </div>
    

  )
}

export  default Todoitems
