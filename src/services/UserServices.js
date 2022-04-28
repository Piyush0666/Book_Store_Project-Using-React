// import axios from 'axios'


// export const register=async(obj) => {
//     let response=await axios.post("https://localhost:44329/api/User/register",obj)
//     return response
// }

// export const login=async(obj) => {
//     let response=await axios.post("https://localhost:44329/api/User/Login",obj)
//     return response
// }

// export const forgotpassword=async(email) => {
//     let response=await axios.post(`https://localhost:44329/api/User/forgot?email=${email}`,"")
//     return response
// }

// export const getBooks = async() =>{
//     let response = await axios.get(`https://localhost:44329/api/Book/getAllBooks`)
//     return response
// }

// export const getBookById = async () => {
//     let response = await axios.get(`https://localhost:44329/api/Book/getBookDetails?bookId=${parseInt(localStorage.getItem("BookId"))}`)
//     return response
// }

// export const Addtocart=async(obj) => {
//     let response=await axios.post("https://localhost:44329/api/Cart/addToCarts",obj)
//     return response
// }

// export const addFeedbacks=async(obj) => {
//     let response=await axios.post("https://localhost:44329/api/Feedback/addFeedbacks",obj)
//     return response
// }

// export const AddtoWishlist=async(obj) => {
//     console.log(obj);
//     let response=await axios.post("https://localhost:44329/api/Wishlist/addToWishlist",obj)
//     return response
// }

// export const AddOrder=async(obj) => {
//     let response=await axios.post("https://localhost:44329/api/Order/addOrders",obj)
//     return response
// }

// export const getWishlist = async () => {
//     let response = await axios.get(`https://localhost:44329/api/Wishlist/getWishlistDetails?userId=${parseInt(localStorage.getItem("userId"))}`)
//     return response
// }

// export const getOrders = async () => {
//     let response = await axios.get(`https://localhost:44329/api/Order/GetOrders?userId=${parseInt(localStorage.getItem("userId"))}`)
//     return response
// }

// export const GetCartDetails = async () => {
//     let response = await axios.get(`https://localhost:44329/api/Cart/getCartDetails?userId=${parseInt(localStorage.getItem("userId"))}`)
//     return response
// }

// export const GetAddressDetails = async () => {
//     let response = await axios.get(`https://localhost:44329/api/Address/getAddressbyUserid?userId=${parseInt(localStorage.getItem("userId"))}`)
//     return response
// }

// export const removeFromWishlist = async () => {
//     console.log(localStorage.getItem("WishId"))
//     let response = await axios.delete(`https://localhost:44329/api/Wishlist/deleteWishlist?wishlistId=${parseInt(localStorage.getItem("WishId"))}`)
//     return response
// }

// export const removeFromCart = async () => {
//     console.log(localStorage.getItem("CartId"))
//     let response = await axios.delete(`https://localhost:44329/api/Cart/deleteBook?cartId=${parseInt(localStorage.getItem("CartId"))}`)
//     return response
// }

// export const retrieveFeedbacks = async () => {
//     let response = await axios.get(`https://localhost:44329/api/Feedback/getFeedbacks?bookId=${parseInt(localStorage.getItem("BookId"))}`)
//     return response
// }





