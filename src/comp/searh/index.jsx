import React from "react";
import  './search.modules.scss'
import s from './close.png'
import debounce from 'lodash.debounce'
import { MyContext } from "../../App";
export const Search= ()=>{
    const [values,setvalues]=React.useState('')
    const {setsearchvalue}= React.useContext(MyContext)
    const inputRef = React.useRef()
    
    const Clear =()=>{
        setsearchvalue('')
        setvalues('')
        inputRef.current.focus()
    }
    const onchagevalue=React.useCallback(
        debounce((str)=>{
           setsearchvalue(str)
        },250),[]
    )

    const inputvalue=(event)=>{
        setvalues(event.target.value)
        onchagevalue(event.target.value)
    }
    return(<div className="fol">
        
<svg className="icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
    </svg>
 <input ref={inputRef} value={values} onChange={inputvalue}  className='root' placeholder="Поиск пиццы" />
     {values && (
 <img onClick={Clear} className="close" src={s} alt="" />
     )
     }
    
    </div>
       
    )
}