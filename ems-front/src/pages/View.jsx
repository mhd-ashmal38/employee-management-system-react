import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { allUsers } from '../services/AllApi';
import { BASE_URL } from '../services/baseUrl';


function View() {

  const { id } = useParams()
  // console.log(id);

  const [showspin, setshowSpin] = useState(true)
  const [user, setUser] = useState({})




  useEffect(() => {

    getUser()

    setTimeout(() => {

      setshowSpin(false)

    }, 2000);


  }, [])


  const getUser = async () => {
    const { data } = await allUsers("")
    // console.log(data);

    // console.log(data.find(item=>item._id===id));

    setUser(data.find(item => item._id === id))
  }

  console.log(user);



  return (
    <>
      {showspin ?
        <LoadingSpinner /> :

        <div className='container' style={{ height: '80vh' }}>

          {

            user?

            <Card className='shadow col-lg-6 ms-auto mt-5 p-3'>

              <div className='text-center'>
                <img style={{ width: '70px', height: '70px', borderRadius: '50%' }} src={`${BASE_URL}/uploads/${user.profile}`} alt="No Img" />
              </div>

              <div className='text-center'>
                <h2>Name : {user.fname} {user.lname}</h2>
                <h2>Email : {user.email}</h2>
                <h2>Mobile : {user.mobile}</h2>
                <h2>Gender : {user.gender}</h2>
                <h2>Status : {user.status}</h2>
                <h2>Location : {user.location}</h2>
              </div>


            </Card> : ""

          }

        </div>

      }
    </>
  )
}

export default View





















// import React, { useEffect, useState } from 'react'
// import { Card } from 'react-bootstrap'
// import LoadingSpinner from '../components/LoadingSpinner'
// import { useParams } from 'react-router-dom'
// import { allUsers } from '../services/AllApi'
// import { BASE_URL } from '../services/baseUrl'

// function View() {

//   const [showspin, setshowspin] = useState(true)

//   const [user, setUser] = useState({})

//   const { id } = useParams()
//   console.log(id);

//   useEffect(() => {

//     getUser()

//     setTimeout(() => {
//       setshowspin(false)
//     }, 2000);

//   }, [])


//   const getUser = async () => {
//     const { data } = await allUsers("")
//     // console.log(data);

//     // console.log(data.find(item=>item._id===id));
//     setUser(data.find(item => item._id === id))
//   }

//   // console.log(user);

//   return (
//     <>
//       {
//         showspin ?
//           <LoadingSpinner /> :

//           <div className="container" style={{ height: '80vh' }}>
//             {
//               user?
//               <Card className='shadow col-lg-6 ms-auto mt-5 p-3'>
//                 <div className='text-center'>
//                   <img style={{ width: '70px', height: '70px', borderRadius: '50%' }} src={`${BASE_URL}/uploads/${user.profile}`} alt="no image" />
//                 </div>

//                 <div className='text-center'>
//                   <h2>{user.fname} {user.lname}</h2>
//                   <h5>email: {user.email}</h5>
//                   <h5>Mobile: {user.mobile}</h5>
//                   <h5>Gender: {user.gender}</h5>
//                   <h5>Status: {user.status}</h5>
//                   <h5>Location: {user.location}</h5>
//                 </div>
//               </Card>:""
//             }
//           </div>
//       }
//     </>
//   )
// }

// export default View