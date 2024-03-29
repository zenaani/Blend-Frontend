import React, { useState, useEffect, useContext } from "react";
import ProfileUserDetails from "../../Components/Profile/ProfileUserDetails";
import ReqUserPost from "../../Components/Profile/ReqUserPost";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [post, setPost] = useState([]);
  const { setUserId, userId } = useContext(UserContext);

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${userId}`).then((data) => {
      console.log(data);
      setUsername(data.data.userName);
      setFullName(data.data.name);
      setPost(data.data.posts);
    });
  }, []);

  return (
    <div className="px-20">
      <div>
        <ProfileUserDetails username={username} fullname={fullname} />
      </div>
      <div>
        <ReqUserPost post={post} />
      </div>
    </div>
  );
};

export default Profile;
