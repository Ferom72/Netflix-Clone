// import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';

// export function IsUserRedirect({ user, loggedInPath, children, path}) {

//   const nav = useNavigate()

//   return (
//     <Routes>
//       <Route
//         path = {path}

//         element = {
//           render ={() => {
//             if (!user) {
//               return children;
//             }
  
//             if (user) {
//               return (
//                 nav(loggedInPath)
//               )
//             }
//           }
//         }
        
//       />
//     </Routes>
//   )
// }

// export function ProtectedRoute({ user, children,path}) {
  
//   const nav = useNavigate()
  
//   return (
//     <Routes>
//       <Route
//         path = {path}

//         render={({location}) => {

//           console.log(location)

//           if (user) {
//             return children;
//           }

//           if (!user) {
//             return (
//               nav(location)
//             )
//           }
//         }}
//       />
//     </Routes>
//   )
// }