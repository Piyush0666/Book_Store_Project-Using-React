import { createContext,useState } from "react";
import "./App.css";
import RouterDom from "./pages/router/Router";
import Image7 from "./assets/Image 7.png";
import Image8 from "./assets/Image 8.png";
import Image10 from "./assets/Image 10.png";
import Image11 from "./assets/Image 11.png";
import Image12 from "./assets/Image 12.png";
export const AllBooks = createContext()

function App() {
  const [bookArray, setBookArray] = useState( [
    {
      bookName: "Don't Make Me Think",
      authorName: "Steve Krug",
      image: Image7,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 1,
    },
    {
      bookName: "The Art of Computer Programming",
      authorName: "Donald Knuth",
      image: Image8,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 2,
    },
    {
      bookName: "React Material UI",
      authorName: "Donald Knuth",
      image: Image10,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 3,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 4,
    },
    {
      bookName: "The Design of Everyday Things",
      authorName: "Donald Knuth",
      image: Image12,
      description: "",

      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 5,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 6,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 7,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 8,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 9,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 10,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 11,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 12,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 13,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 14,
    },
    {
      bookName: "Mastering Sharepoint Framework",
      authorName: "Donald Knuth",
      image: Image11,
      description: "",
      rating: "4.5",
      reviewer: "1,000",
      discountPrice: "200",
      originalPrice: "400",
      id: 15,
    },
  ]
  )
  let boookobject = {
    books: bookArray,
    setBooks: setBookArray
  }
   
  return (
    <AllBooks.Provider value={boookobject}>
    <RouterDom />
    </AllBooks.Provider>
    // <div>
    //   {/* <OrderSummery/> */}
    //     {/* <OrderPlaced/>    */}
    //     {/* <Feedback/> */}
    //  </div>
  );
}

export default App;