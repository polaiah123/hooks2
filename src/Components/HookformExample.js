import React,{useState} from 'react'


 const HookformExample = () => {
    let [name, setName]= useState({Firstname:'',Lastname:''})
    
    const Test = (e) =>{
        // alert('hello')
    alert(`${name.Firstname} ${name.Lastname}`)
    e.preventDefault();

    }

    return (         
        <form>   
            <label>Firstname</label>
            <input  type="text"
             value={name.Firstname}
             placeholder= 'Firstname'
             onChange={e => setName({...name , Firstname: e.target.value})}></input>
            <label>Lastname</label>
            <input type="text"
             value={name.Lastname}
             placeholder= 'Lastname'
             onChange={e => setName({...name , Lastname: e.target.value})}></input>
             {/* <h2>first name is -{name.Firstname}</h2>
             <h2>last name is -{name.Lastname}</h2> */}
             <button onClick={Test}>Test</button>
            
        </form>
    )  

}
export default HookformExample
