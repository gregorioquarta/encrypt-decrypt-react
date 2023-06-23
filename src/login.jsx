import React from 'react'
import styles from './login.module.css'
import  { useState, useEffect } from 'react'
export default function Login() {

    const [code, setCode] = useState({
        num1 : 0,
        num2 : 0,
        num3 : 0,
        num4 : 0
    })
    const [unlock, setUnlock] = useState(false)

    useEffect( () => { document.querySelector("html").classList.add("scroll-disabled") });
    
    useEffect( () => { 
        document.querySelector("html").classList.remove("scroll-disabled") 
    }, [unlock] );


    useEffect(()=>{
        console.log("lecode", code)
        
        // let verify = {
        //     num1 : 1,
        //     num2 : 7,
        //     num3 : 0,
        //     num4 : 1
        // }
        
        if(code.num1 === 1 && code.num2 === 7 && code.num3 === 0  && code.num4 === 1) {
            setUnlock(true)
            
            console.log("true")
        }else{
            
            console.log("false")
        }

    }, [code])

    const changeOne = (event) => {
        //console.log(event.target.value)
        setCode({...code, [event.target.name]: +event.target.value})
    }
    const changeTwo = (event) => {
        //console.log(event.target.value)
        setCode({...code, [event.target.name]: +event.target.value})
    }
    const changeThree = (event) => {
        //console.log(event.target.value)
        setCode({...code, [event.target.name]: +event.target.value})
    }
    const changeFour = (event) => {
        //console.log(event.target.value)
        setCode({...code, [event.target.name]: +event.target.value})
    }
  // Mon return
  return (
    <React.Fragment >
      <div className={styles.box} style = {{display: unlock ? 'none' : 'flex'}}>
        <div>
           <input className={styles.input} type="text" id="num1" name="num1" required
       minlength="400" maxlength="1" size="10" onChange={changeOne} autofocus placeholder='*' />

       <input className={styles.input} type="text" id="num2" name="num2" required
       minlength="400" maxlength="1" size="10" onChange={changeTwo} placeholder='*'/>

       <input className={styles.input} type="text" id="num3" name="num3" required
       minlength="400" maxlength="1" size="10" onChange={changeThree} placeholder='*'/>

       <input className={styles.input} type="text" id="num4" name="num4" required
       minlength="400" maxlength="1" size="10" onChange={changeFour} placeholder='*'/> 

        </div>
        
      </div>
    </React.Fragment>
  )
}
