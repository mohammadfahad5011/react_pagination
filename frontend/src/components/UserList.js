import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const UserList = () => {
  const [users, setUsers] = useState([]);

  //For Search
  const params = useParams();
  const keyword = params.keyword;

  //For pagination
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 2; //per page koto gulo show korte cai
  const pagesVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(users.length / userPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((user, i) => {
      return (
        <tr key={i}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });

  const getUser = async (keyword = " ") => {
    const { data } = await axios.get(
      `http://localhost:5050/api/user?keyword=${keyword}`
    );
    setUsers(data);
  };

  useEffect(() => {
    getUser(keyword);
  }, [keyword]);

  return (
    <>
      <h1>User List</h1>
      <button disabled> add user </button>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {displayUsers}{" "}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"desibleBttn"}
            activeClassName={"paginationActive"}
          />
        </tbody>
      </table>
    </>
  );
};

export default UserList;
