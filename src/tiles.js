import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import tile from './tiles.module.css'

const Tiles = function () {
      const[count,setcount] = useState(0) ; 
      const [blocks,setblocks] = useState([
          {
               id:1, 
               row: 0,
               column: 0,
               value: "",
               clicked: false 
          },
          {
               id:2, 
               value: "",
               row: 0,
               column: 1,
               clicked: false
               
          },
          {
               id:3, 
               value: "",
               row: 0,
               column: 2,
               clicked: false
          },
          {
               id:4, 
               value: "",
               row: 1,
               column: 0,
               clicked: false
          },
          {
               id:5, 
               value: "",
               row: 1,
               column: 1,
               clicked: false
          },
          {
               id:6, 
               value: "",
               row: 1,
               column: 2,
               clicked: false
          },
          {
               id:7, 
               value: "",
               row: 2,
               column: 0,
               clicked: false
          },
          {
               id:8, 
               value: "",
               row: 2,
               column: 1,
               clicked: false
          },
          {
               id:9, 
               value: "",
               row: 2,
               column: 2,
               clicked: false
          },

     ]);
     const [original,setoriginal] = useState(true) ; 

     useEffect(()=>{
        setoriginal(blocks) ; 
     },[count]) ; 


     // const origine = [...blocks] ; 
     // console.log(blocks) ; 
     const [toggle,settoggle] = useState(true) ; 
     const [win,setWin] = useState(false) ; 

     const check = function(array,row,column,value) {
          let r = 0,c = 0,d1 = 0,d2 = 0 ; 
          for (let box of array) {
               if (box.row === row && box.value === value) {
                    r++; 
               }
               if (box.column === column && box.value === value) {
                    c++; 
               }
               if (box.column === box.row && box.value === value) {
                    d1++; 
               }
               if ((box.row === (3 - box.column - 1)) && box.value === value) {
                    d2++; 
               }
          }
          console.log(r,c,d1,d2)
          if (r === 2 || c === 2 || d1 === 2 || d2 === 2) {
               return true; 
          }
          return false ; 
          
     }


     const changevalue = function(index) {
          if (blocks[index].clicked) {
               return ; 
          }
          let value = (toggle) ? "O" : "X" ; 
          setblocks(blocks.map(item => item.id === index+1 ? {...item,value : value,clicked:true} : item)) ; 
          // console.log(blocks) ; 
          let chck = check(blocks,blocks[index].row,blocks[index].column,value) ; 
          // console.log("Win ---- ",win) ; 
          // console.log("chck", chck) ; 
          if (chck) {
              setWin(true) ;  
          }
          settoggle(prevToggle => !prevToggle) ; 
     }

     const reset = function() {
          setWin(false) ; 
          setblocks(original) ; 
          setcount(count => count + 1) ; 
          settoggle(prevToggle => !prevToggle)
     }

      return (
      <div className={tile.container}>
           <h1>{toggle ? "1st Player chance" : "2nd Player chance"} </h1>
           <div className={tile.tiles}>
           {blocks.map((box,index) => {
                return (
                       <div key={box.id} className={tile.box} onClick={() => changevalue(index)}> 
                       <p className={tile.value}>{box.value}</p>
                       </div>
                )
           })}
           </div>
           {win && <div className={tile.popUp}>
                <h1>{!toggle ? "1st player win" : "2nd player win" }</h1>
                <button onClick={() => reset()}>Start New Game</button>
                </div>}

      </div>
    );
}

export default Tiles ; 