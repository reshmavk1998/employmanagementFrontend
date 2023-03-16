import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function Admin() {
    const[allEmployees,setAllEmployees] = useState([])

    const fetchData = async ()=>{
     const  result = await axios.get('http://localhost:8000/get-all-employees')
     setAllEmployees(result.data.employees);
    }

console.log(allEmployees);
    useEffect(()=>{
        fetchData();
    },[]);

    // handleDelete
    const handleDelete = async (id)=>{
      const result = axios.delete('http://localhost:8000/delete-employee/'+id)
      alert((await result).data.message);
      fetchData()
    }
   
  return (
    <div>
        <div className='container mt-5'>
            <h2 style={{marginLeft:10}}><i className='fa-solid fa-user-group'></i> Employee Management Application

      <Link to={"/add"}> 
           <a className='btn btn-success ms-5'><i className='fa-solid fa-user-plus'></i> Add Employee</a>
     </Link>
           {""}



            </h2>
            <p style={{textAlign:'justify',marginTop:50}}>
            This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  
            This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  
            </p>
        </div>
     <div className='container mt-2 mb-2'>
        <h2 className='text-dark mt-5'>Employee Details</h2>
            {/* table design */}
                <div className="card-body mt-3 ">
                  <div className="table-responsive">
                <Table  className="table table-info text-dark text-justify  ">
                            <thead c>
                              <tr>
                                <th> # </th>
                                <th> id</th>
                                <th> Name </th>
                                <th> Age </th>
                                <th> Designation </th>
                                <th> Salary </th>
                                <th> Action </th>
                             </tr>
                            </thead>
                            <tbody>
                              {
                                allEmployees.map((item,index)=>(
                                  <tr>
                                    <td>{index+1}</td>
                                    <th> {item.id}</th>
                                    <td>{item.uname}</td>
                                    <td>{item.age}</td>
                                    <td>{item.desg}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                     <Link to={'edit/'+item.id}>
                                        <Button className=' me-3'>
                                          {" "}
                                           <i className='fa-solid fa-pen text-dark '></i>{" "}
                                       </Button> 
                                     </Link >
                                     <Button onClick={()=>handleDelete(item.id)} className='  '>
                                     {" "}
                                         <i className='fa-solid fa-trash text-danger'></i>{" "}
                                     </Button>  
                                    </td>
                                  </tr>
                                  ))
                              }
                              </tbody>
                          </Table>
                        </div>
                      </div>
                    
     </div >
              </div>

          

 )
}

export default Admin
