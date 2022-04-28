import React,{useContext} from "react";
import BookComponent from "../../components/bookComponent/BookComponent";
import FooterCopyrights from "../../components/footer/Footer";
import BookHeader from "../../components/header/Header";
import "./Dashboard.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {AllBooks} from "../../App";

function Dashboard() {
  const { books: bookArray} = useContext(AllBooks)
  

  // const GetBooks =() => {
  //     getBooks().then((resp) => {
  //     console.log(resp.data.data)
  //     setBookArray(resp.data.data)
  // }).catch((err) => {
  //     console.log(err)
  // })
  // }

  // React.useEffect(()=>{
  //     GetBooks();
  // },[]);

  const bookList = bookArray.map((x) => (
    <BookComponent
      key={x.id}
      bookName={x.bookName}
      authorName={x.authorName}
      image={x.image}
      description={x.description}
      rating={x.rating}
      reviewer={x.reviewer}
      discountPrice={x.discountPrice}
      originalPrice={x.originalPrice}
      id={x.id}
    />
  ));
  if (localStorage.getItem("token")) {
    return (
      <div>
        <BookHeader />
        <div className="mid-container1">
          <div>Books</div>
          <div className="item">({bookList.length} items)</div>
        </div>
        <div className="mainNotesContainer">{bookList}</div>
        <Stack spacing={2} style={{ marginLeft: 500 }}>
          <Pagination count={10} shape="rounded" />
        </Stack>
        <FooterCopyrights />
      </div>
    );
  } else {
    return (
      <div>
        <BookHeader />
        <div className="mid-container1">
          <div>Books</div>
          <div className="item">(128 items)</div>
        </div>
        <div className="mainNotesContainer">{bookList}</div>
        {/* <Stack spacing={2} style={{ marginLeft: 500, marginTop:15000 }}>
          <Pagination count={10} shape="rounded" />
        </Stack> */}
        <FooterCopyrights />
      </div>
    );
  }
}

export default Dashboard;