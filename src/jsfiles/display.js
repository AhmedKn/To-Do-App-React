import React from 'react'
import '../cssfiles/display.css'
 

function Display (props){
    const list = props.list;
const newarr = []
for (let i of list){
    newarr.push(
    <li key={i.id} className='Item'>
        <div className='buttons'>
<button className='btn-complete' onClick={() =>props.changer(i.id)}>{i.btn}</button>
<button className='btn-Delete' onClick={() =>props.delete(i.id)}>Delete</button>
</div>
    <p className={i.styling}>{i.text}</p>
    </li>
    )
}
return newarr
}





export default Display;