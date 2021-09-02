import axios from "axios";
import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList=() => {
    const [users,setUsers]=useState([]) 
    const [error, setError] = useState(null)
    
    useEffect(
        ()=> {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=> setUsers (res.data))
            .catch(err => setError(err));
        },[]
       
    )
    return (
        <div> 

          <Table striped bordered hover size="sm">   <thead>
                      <tr>
                        <th style={{width:100}}>ID</th>
                        <th style={{width:200}}>NAME</th>
                        <th style={{width:200}}>USERNAME</th>
                        <th style={{width:200}}>EMAIL</th>
                      </tr>
                    </thead></Table>
                           
          {users.map(per=>(
                    <Table striped bordered hover size="sm">

                    <tbody>
                      <tr>
                        <td style={{width:100}}>{per.id}</td>
                        <td style={{width:200}}>{per.name}</td>
                        <td style={{width:200}}>{per.username}</td>
                        <td style={{width:200}}>{per.email}</td>
                      </tr>
                    </tbody>
                  </Table>
                  ))} 
            
        </div>
    )
}

export default UserList
