import{useState} from "react"

function App(){
const [inputValue, setInputValue] = useState('');
const [storeArray, setstorearray] = useState([]);
const handlechange = (e)=>{
  setInputValue(e.target.value);
}
const handleCreateInput=()=>{
  let spreaddata   = [...storeArray,inputValue]
  setstorearray(spreaddata)
}
const filterFn =(id)=>{
  let deletearr = storeArray.filter((a, index)=>{
    return index !==id;
  })
  setstorearray(deletearr);
}
const handlerupdate =(id)=>{
  let enteredsentence = prompt("Enter the text you want to update.")
  let updatedArray = storeArray.map((a, index)=>{
    if (id==index){
      return enteredsentence;
    }else{
      return a ;
    }
  });
  setstorearray(updatedArray)
};
return ( 
<div>
  <input type="text" placeholder="enter data..."
  onChange={handlechange} />

  <button onClick={handleCreateInput}>add</button>
  <br />
  {storeArray.map((a,index)=>{
    return(
      <div style={{display:"flex"}} key={index}>
        <h2>{a}</h2>
        <button onClick={()=>{
          filterFn(index)
        }}>
          Delete
        </button>
        <button onClick={()=>{
          handlerupdate(index);
        }}> 
        Update 
        </button>
        </div>
    )
    })}
</div>
)}
export default App;