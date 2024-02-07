import axios from "axios";
import React, { useEffect, useState } from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const userId = 1;

  useEffect(() => {
    axios.get("http://localhost:8080/user").then((data) => {
      console.log(data);
      setUsers(data?.data);
    });
  }, []);

  return (
    <div className="p-10">
      <div className=" text-2xl">Usersssss</div>
      {users.map((item, i) => (
        <div key={i} className="flex items-center">
          <div
            className="bg-blue-400 m-5 rounded-2xl p-5"
            onClick={() => {
              navigate(`/username/${userId}`);
            }}
          >
            Pic
          </div>
          <div className=" font-bold">{item?.userName}</div>
        </div>
      ))}
    </div>
  );
};

export default Search;
