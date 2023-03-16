import axios from 'axios';
import React, { useState,useEffect } from 'react';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function Add() {

    const [id,setId] = useState('')
    const [empName,setName] = useState('')
    const [empAge,setAge] = useState('')
    const [empDesg,setDesg] = useState('')
    const [empSalary,setSalary] = useState(0)

    let location = useNavigate()
    
    useEffect(()=>{
     // generate unique id
     setId(uuid().slice(0,4));
    },[])
    

    const handleAddEmployee = async(e)=>{
      // prevent to refresh the page
      e.preventDefault()
     // generate unique id
      setId(uuid().slice(0,4));
      // create body to share with backend
      const body = {
        id,
        empName,
        empAge,
        empDesg,
        empSalary

      }
      console.log(body);
      // api call
      const result = await axios.post('http://localhost:8000/add-employee',body)
      alert(result.data.message)
      // redirect to admin
       location('/')
    }



  return (
    <div >
        <div className='container mt-5 '>
        <h1 className='text-secondary'> 
           {""} 
        <i className='fa-solid fa-user-plus'></i> Create New Employee Details
        </h1>
            <p className='text-dark' style={{textAlign:'justify',marginTop:50}}>
            This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  
            This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  
            </p>
            </div>
            <Form>
            <div className="text center mb-3 mt-1 " style={{padding:70}}>
    
          <Form.Group className="mb-3 text-dark " controlId="formName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control className='bg-info' type="text" placeholder=" Employee name" 
             onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3 text-dark" controlId="formAge">
          <Form.Label>Employee Age</Form.Label>
          <Form.Control className='bg-info' type="number" placeholder="Employee Age"
           onChange={(e)=>setAge(e.target.value)} />
          </Form.Group>
      
          <Form.Group className="mb-3 text-dark" controlId="formDesignation">
          <Form.Label>Employee Designation</Form.Label>
          <Form.Control className='bg-info' type="text" placeholder='Employee Designation' 
           onChange={(e)=>setDesg(e.target.value)}/>
          </Form.Group>
        
          <Form.Group className="mb-3 text-dark" controlId="formSalary">
          <Form.Label>Employee Salary</Form.Label>
          <Form.Control className='bg-info' type="number" placeholder='Employee salary'
           onChange={(e)=>setSalary(e.target.value)} />
          </Form.Group>
           
          <div>
               <Button onClick={(e)=>handleAddEmployee(e)} variant='success'  className='text-dark' type='submit'>
                add
               </Button> 

              <Link to={'/'}>
                 <Button className='ms-3 text-dark ' variant='warning' type='submit'>
                  close
                 </Button> 
              </Link >
               
             </div >


          </div>
     </Form>
       </div>

  )
}

export default Add