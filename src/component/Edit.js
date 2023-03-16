import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';




function Edit() {

  const [id,setId] = useState('')
  const [empName,setName] = useState('')
  const [empAge,setAge] = useState('')
  const [empDesg,setDesg] = useState('')
  const [empSalary,setSalary] = useState(0)

  // get path parameter from url
  const params = useParams()
  // console.log(params.id);

  const location = useNavigate()
  // api call to get details of a particular employee from server get-an-employee
  const fetchEmployee= async()=>{
  const result = await axios.get('http://localhost:8000/get-an-employee/'+params.id)
  setId(result.data.employee.id);
  setName(result.data.employee.uname);
  setAge(result.data.employee.age);
  setDesg(result.data.employee.desg);
  setSalary(result.data.employee.salary);
  }

  const handleUpdate = async (e)=>{
    e.preventDefault()
    // create body to share with backend
    const body = {
      id,
      empName,
      empAge,
      empDesg,
      empSalary

    }
    // api call - post
    const result = await axios.post('http://localhost:8000/update-employee',body)
    alert(result.data.message)
    location('/')

  }




  useEffect(()=>{
    fetchEmployee()
  },[])

  return (
    <div>
       <div className='container mt-5 '>
        <h1 className='text-secondary'> 
           {""} 
        <i className="fa-solid fa-user-pen"></i> Update Employee Details
        </h1>
            <p className='text-dark' style={{textAlign:'justify',marginTop:50}}>
            This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  
            This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  This is dummy data:  
            </p>
            </div>

            {/* form design */}

            <Form>
            <div className="text center mb-3 mt-1" style={{padding:70}}>
    
          <Form.Group className="mb-3 text-dark " controlId="formName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control className='bg-primary' type="text" placeholder=" name" value={empName}
            onChange={(e)=>setName(e.target.value)}  />
          </Form.Group>

          <Form.Group className="mb-3 text-dark" controlId="formAge">
          <Form.Label>Employee Age</Form.Label>
          <Form.Control className='bg-primary' type="number" placeholder="Age" value={empAge}
           onChange={(e)=>setAge(e.target.value)} />
          </Form.Group>
      
          <Form.Group className="mb-3 text-dark" controlId="formDesignation">
          <Form.Label>Employee Designation</Form.Label>
          <Form.Control className='bg-primary' type="text" placeholder='Designation' value={empDesg}
           onChange={(e)=>setDesg(e.target.value)} />
          </Form.Group>
        
          <Form.Group className="mb-3 text-dark" controlId="formSalary">
          <Form.Label>Employee Salary</Form.Label>
          <Form.Control className='bg-primary' type="number" placeholder='salary'value={empSalary}
            onChange={(e)=>setSalary(e.target.value)} />
          </Form.Group>
           
          <div>
               <Button  onClick={(e)=>handleUpdate(e)}  variant='success'  className='text-dark' type='submit'>
                Update
               </Button> 

              <Link to={'/'}>
                 <Button className='ms-3 text-dark' variant='warning' type='submit'>
                  close
                 </Button> 
              </Link >
               
             </div >


          </div>
     </Form>

    </div>
  )
}

export default Edit