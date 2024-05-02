import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Hometable from '../components/Hometable'
import LoadingSpinner from '../components/LoadingSpinner'
import { allUsers, deleteUser } from '../services/AllApi'
import { deleteContext, registerContext } from './ContextShare'
import { Alert } from 'react-bootstrap'


function Home() {


  const{registerdata, setRegisterdata}=useContext(registerContext)

  // const{deletedata,setDeletedata}=useContext(deleteContext)

  // const navigate=useNavigate()


  const [showspin, setshowSpin] = useState(true)

  const[allUserData,setallUserData] = useState([])

  const[search,setSearch] = useState("")

  const {id} = useParams()
  console.log(id);


  useEffect(() => {

    getAllEmployees()


    setTimeout(() => {

      setshowSpin(false)

    }, 2000);


  }, [search])


  // To get all data, call allUsers()

  const getAllEmployees = async() =>{
    const response = await allUsers(search)
    console.log(response);
    setallUserData(response.data)
  }

  console.log(allUserData);

  // To delete single data
  const removeUser = async(id)=>{
    const response = await deleteUser(id)

    if(response.status==200){
      getAllEmployees()
      // setDeletedata(response.data)
      // navigate('/')

    }else{
      alert("Operation FAILED successfully !!! Please try after sometime")
    }
  }

  


  return (
    <>

      {
        registerdata&&<Alert variant='success' onClose={()=>setRegisterdata("")}dismissible>
          {registerdata.fname.toUpperCase()} registered successfully..........
        </Alert>
      }

      {/* {
        deletedata&&<Alert variant='success' onClose={()=>setDeletedata("")}dismissible>
          {deletedata.fname}deleted successfully......
        </Alert>
      } */}

      {
        showspin ? <LoadingSpinner /> :

          <div className='container'>

            <div className='row search-all d-flex align-items-center'>

              <div className='col-lg-6 search d-flex align-items-center mt-5'>

                <span className='fw-bolder'> Search: </span>

                <input type="text" onChange={e=>setSearch(e.target.value)} placeholder='Search by Employee Name' className='form-control ms-1' style={{ width: '300px' }} />

              </div>

              <div style={{alignItems:'end'}} className='col-lg-6'><Link to={'/add'} className='btn btn-warning ms-auto mt-5'> <i class="fa-solid fa-user-plus"></i> Add</Link></div>

            </div>

            <div className='table mt-5'>

              <h1 className='fw-bolder'>List of All Employees</h1>

              <Hometable displayData = {allUserData} removeuser={removeUser}/>

            </div>

          </div>
      }
    </>
  )
}

export default Home






















// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import Hometable from '../components/Hometable'
// import LoadingSpinner from '../components/LoadingSpinner'
// import { allUsers } from '../services/AllApi'

// function Home() {

//   const [showspin, setshowspin] = useState(true)
//   const[allUserData,setallUserData]=useState([])


//   const [search,setSearch]=useState("")

// // console.log(search);

//   useEffect(() => {

//     getAllEmployes()

//     setTimeout(() => {
//       setshowspin(false)
//     }, 2000);

//   }, [search])



//   // to get all data call allUsers function

// const getAllEmployes=async()=>{
//   const response=await allUsers(search)
//   console.log(response);

//   setallUserData(response.data)
// }
// console.log(allUserData);


//   return (
//     <>

//       {
//         showspin?
//         <LoadingSpinner />:
  
//         <div className='container'>
//           <div className='search-all d-flex align-items-center'>
//             <div className='search d-flex align-items-center mt-5'>
//               <span className='fw-bolder'>Search:</span>
//               <input onChange={e=>setSearch(e.target.value)} type="text" placeholder='Search By Employee Name' className='form-control ms-3' style={{ width: '400px' }} />
//             </div>
//             <Link to={'/add'} className='btn btn-warning ms-auto mt-5'><i class="fa-solid fa-user-plus"></i> Add</Link>
//           </div>
//           <div className='table mt-5'>
//             <h1 className='fw-bolder'>List of All Employees</h1>
//             <Hometable displayData={allUserData}/>
//           </div>
//         </div>
//       }
//     </>
//   )
// }

// export default Home