import React, { useEffect, useState } from 'react'
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

const Table = () => {
const [data,setData]=useState([])

useEffect(()=>{
    axios("https://northwind.vercel.app/api/products").then((res)=>{
        console.log(res.data);
        setData(res.data)
    })
},[])

return (
<>
<div>
<h1>Table</h1>
<input type="text" />
<input type="text" />
<button onClick={()=>{
    
}}>Add</button>
<table>
<thead>
<th>Id</th>
<th>Name</th>
<th>UnitPrice</th>
<th>Button</th>
</thead>
<tbody>
    {
        data.map((elem,i)=>{
            return <tr key={uuidv4}>
            <td>{elem.id}</td>
            <td>{elem.name}</td>
            <td>{elem.unitPrice}</td>
            <td><button onClick={()=>{
                
            // let newarr=data.filter((item=>item.id!=elem.id))
            // axios.delete("https://northwind.vercel.app/api/products" + "/" + elem.id)
            // setData(newarr)
            }}>Delete</button></td>
            </tr>
        })
    }
</tbody>
</table>
</div>
</>
  )
}
export default Table