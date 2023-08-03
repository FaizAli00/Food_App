import React, { useEffect, useState } from 'react'

function Lists ( {getItems} ) {
    const [items, setItems] = useState([])
    
    useEffect(()=> {
        setItems(getItems())
        console.log('Updating Items')
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}
export default Lists

// export default function App () {
//   const [number, setNumber] = useState(0);
//         const [dark, setDark] = useState(false);
//         const doubleNumber = useMemo(()=>{
//           return slowFunction(number);
//         },[number]) 
//         const themeStyles = useMemo(()=>{
//           return {
//             backgroundColor: dark? 'black' : 'white',
//             color: dark ? 'white' : 'black'
//           }
//         }, [dark])
//         useEffect(() =>{
//           console.log('Theme Changed')
//         }, [themeStyles])
//     return (
//       <>
//         <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
//         <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
//         <div style={themeStyles}>{ doubleNumber }</div>
//       </>
//     );
//   };

// function slowFunction(num) {
//   console.log('Calling Slow Function')
//   for(let i=1;i<= 1000000000; i++) {}
//   return num *2
// }

// const [name, setName] = useState('')
// const prevName = useRef('')
// const renderCount = useRef(1)
// const inputRef = useRef()

// useEffect(()=>{
//   renderCount.current = renderCount.current + 1;
// })
// function focus () {
//   inputRef.current.focus()
//   inputRef.current.value = 'Some Value'
// }

// useEffect(() => {
//   prevName.current = name
// }, [name])

// return (
//   <>
//     <input  value={name} onChange={e => setName(e.target.value)} />
//     <div>My Name is {name} and it is used to be {prevName.current}</div>
//     {/* <button onClick={focus}>Focus</button> */}
//   </>
// )
// }

// export const ThemeContext = React.createContext()
// export default function App () {
  // const [darkTheme, setDarkTheme] = useState(true)

  // function toggleTheme() {
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme);
  // }

// return (

//     <ThemeProvider>
//       <FunctionComponentContext />
//       {/* <ClassContextComponent /> */}
//     </ThemeProvider>
  
// )
// }


// Reducer function


// import React, { useReducer } from 'react';

// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement'
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const CounterComponent = () => {
//   const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const increment = () => {
//     dispatch({ type: ACTIONS.INCREMENT });
//   };

//   const decrement = () => {
//     dispatch({ type: ACTIONS.DECREMENT });
//   };

//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <span>{state.count}</span>
//       <button onClick={decrement}>-</button>
//     </>
//   );
// };

// export default CounterComponent;


// export default function App () {
//   const [number, setNumber] = useState(1)
//   const [dark, setDark] = useState(false)

//   const getItems = useCallback(() => {
//     return [number, number + 1, number +2]
//   }, [number])

//   const theme = {
//     backgroundColor: dark ? '#333' : '#fff' ,
//     color: dark ? '#fff' : '#333' 
//   }

//   return (
//     <div style={theme}>
//       <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
//       <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
//       <Lists getItems={getItems}/>
//     </div>
//   )
// }