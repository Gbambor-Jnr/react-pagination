import { useState } from "react";
import ReactPaginate from "react-paginate";
import Mockdata from "./MOCK_DATA.json";
import "./index.css";

function App() {
  const [users, setUsers] = useState(Mockdata.slice(0, 51));
  const [pageNumber, setpageNumber] = useState(0);

  const usersPerPage = 10;
  const nextPage = pageNumber * usersPerPage;

  const displayUsers = () =>
    users.slice(nextPage, nextPage + usersPerPage).map((user) => {
      return (
        <div className="user__container" key={user.id}>
          <h4>{user.first_name}</h4>
          <h4>{user.last_name}</h4>
          <h4>{user.email}</h4>
        </div>
      );
    }); //for example for 50 people, we start from 40 and end at (40+10)

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setpageNumber(selected);
  }; //selected is the number of the page we want to move to
  return (
    <div className="App">
      {displayUsers()}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="pagination"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
        disabledLinkClassName="disabledBtn"
        activeClassName="activeBtn"
      />
    </div>
  );
}

export default App;
