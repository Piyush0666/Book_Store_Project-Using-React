
import React, { useEffect,useContext } from "react";
import booklogo from "../../assets/booklogo.png";
import "./Header.css";
import "antd/dist/antd.css";
import { useHistory} from "react-router";
import  {Link} from "react-router-dom" 
import {AllBooks} from "../../App";



var MyBooks
function BookHeader() {

  const books = useContext(AllBooks)
  MyBooks=books.books
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [itemsInCart, setItemsInCart] = React.useState(null);
  const [searchItem, setsearchItem] = React.useState("");

  const search = (event) => { 

    setsearchItem(event)
    const newBooks =books.books.filter(item=> item.bookName.toLowerCase().includes(event.toLowerCase()))
    books.setBooks(newBooks)
  } 

  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;


  let allItems = JSON.parse(localStorage.getItem("items"));

  useEffect(() => {
    if (allItems && allItems.length > 0) {
      setItemsInCart(allItems.length);
    }
  }, [itemsInCart, allItems]);
  setInterval(() => {
    let allItems = JSON.parse(localStorage.getItem("items"));
    if (allItems && allItems.length > 0) {
      setItemsInCart(allItems.length);
    }
  }, 2000);

  const logout = () => {
    history.push("/");
    localStorage.clear();
  };

  return (
    // <div className="header">
    //   <div className="headerside">
    //     <img src={booklogo} class="booklogo" />
    //     <p className="bookstoreheader">
    //       <Link to='/'>BookStore</Link></p>
    //   </div>
    //   <div className="Search">
    //     <img className="Search-logo" src={search} alt="search" />
    //     <Input
    //       className="Search-Text"
    //       style={{
    //         background: "rgb(255 255 255)",
    //         borderColor: "rgb(255 255 255)",
    //         width: 300,
    //         height: 28,
    //       }}
    //       placeholder="Search..."
    //     />
    //   </div>
    //   {/* <div className="profile" onClick={handleClick}> */}
    //     <img src={profile} className="mainprofilelogo" />
    //     <div>{localStorage.getItem("Name")}</div>
    //     <Popper id={id} open={open} anchorEl={anchorEl} transition>
    //       {({ TransitionProps }) => (
    //         <Fade {...TransitionProps} timeout={350}>
    //           <Box
    //             sx={{
    //               border: 0,
    //               p: 0,
    //               bgcolor: "grey",
    //               background: "rgb(255 255 255)",
    //             }}
    //           >
    //             <div className="popper">
    //               <p className="hello">Hello {localStorage.getItem("Name")},</p>
    //               <div className="division">
    //                 <img src={person} alt="profile" className="icons" />
    //                 <p className="tags">Profile</p>
    //               </div>
    //               <div className="division">
    //                 <img src={order} alt="profile" className="icons" />
    //                 <p className="tags" onClick={() => history.push("/orders")}>
    //                   My Orders
    //                 </p>
    //               </div>
    //               <div className="division">
    //                 <img src={heart} alt="profile" className="icons" />
    //                 <p
    //                   className="tags"
    //                   onClick={() => history.push("/wishlist")}
    //                 >
    //                   My Wishlist
    //                 </p>
    //               </div>
    //               <button className="logout" onClick={logout}>
    //                 Logout
    //               </button>
    //             </div>
    //           </Box>
    //         </Fade>
    //       )}
    //     </Popper>
    //   {/* </div> */}
    //   <div className="cart">
    //     <img
    //       src={cart}
    //       onClick={() => history.push("/cart")}
    //       className="cartlogo"
    //     />
    //     <div>Cart</div>
    //   </div>
    // </div>

    <nav>
            <div className="logo" >
            <img src={booklogo} />
          </div>
            <ul className="left">
                <li>
                    <Link to="/">Book Store</Link>
                </li>
            </ul>
            <div className="search-Box">
         <div ClassName="search-Icon"></div> 
          <input onChange={(e) => search(e.target.value)} value={searchItem} type="text" className="search-Input" placeholder="Search... " />
        </div>
            {/* <div className="cart">
        <Badge badgeContent={itemsInCart ? itemsInCart : 0} color="secondary">
          <img
            src={cart}
            onClick={() => history.push("/cart")}
            className="cartlogo"
          />
        </Badge>
        <div>Cart</div>
      </div> */}

        <ul className="right">
                <li> <Link to="cart"> 
                <span className="shoppingCart"><i class="fa-solid fa-cart-plus"></i> 
                <span className="cartCount">{itemsInCart ? itemsInCart : 0}</span>
                </span>
                </Link></li>
            </ul>
            
        </nav>


  );
}

export default BookHeader;