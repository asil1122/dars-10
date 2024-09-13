
// export const getData = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/new_products");
//       const data = await res.json();
//     return data
//     } catch (error) {
//         return error.message
//     }
//   };
  

// export const getId = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/new_products/${id}`, {
//         method: "DELETE",
//       });
//     const data = await res.json()
//     return data
//     } catch (error) {
//         return error.message
//     }
// }

// export const getdata = async () => {
//     try {
//      const res = await fetch("http://localhost:3000/new_products", {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//           body: JSON.stringify(data),
//         });
//     const data = await res.json()
//     return data
//       } catch (error) {
//         return error.message
//     }
// }