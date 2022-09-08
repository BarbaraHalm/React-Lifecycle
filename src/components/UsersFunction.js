import React from 'react';
import {useState,useEffect} from "react"

function UsersFunction() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch(" https://jsonplaceholder.typicode.com/users").then((response)=>
        {response.json().then((data)=>
            {setUsers(data)
                console.log(data);
        })
    });
    });
    return ( 
        <>
        <div>
             <h1>Functional Users</h1>
             {users.map((item,index)=>{
                 return(
                    <div key={item.id}>
                        <h1>name:{item.name}</h1>
                        <h2>username:{item.username}</h2>
                        <h3>email:{item.email}</h3>
                        <br/>
                        <hr/>
                    </div>

                )
            })}
        </div>
        </>
     );
}  

export default UsersFunction;