import React from 'react';
//import Hookcounter from './Components/Hookcounter';
//import HookformExample from './Components/HookformExample'
//import UseEffectone from './Components/UseEffectone';
//import SetIntervalone from './Components/setIntervalone';
// import Datafetching from './Components/Datafetching';
  import ContextExample from './Components/ContextExample';
  import useReducerExample2 from './Components/useReducerExample2';
  import useReduceEx from './Components/useReduceEx';
  
    export   const user = React.createContext()
    export   const user1 = React.createContext()

function App() {
    
  return (
    <div className='App'>
      <useReduceEx/>
      <useReducerExample2 />
       {/* <Hookcounter></Hookcounter>  */}
       {/* <HookformExample></HookformExample>  */}
       {/* <UseEffectone></UseEffectone>
       <SetIntervalone></SetIntervalone> */}
     {/* <Datafetching></Datafetching>  */}
           <user.Provider value={'veera'}>
            <user1.Provider value ={'srinivasa'}>
              <ContextExample></ContextExample>
            </user1.Provider>
          </user.Provider>           
    </div>
  );
}

export default App;
