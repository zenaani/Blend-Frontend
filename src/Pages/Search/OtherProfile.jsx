import React, { useState, useEffect, useContext } from "react";
import ProfileUserDetails from "../../Components/Profile/ProfileUserDetails";
import ReqUserPost from "../../Components/Profile/ReqUserPost";
import axios from "axios";
import { useParams } from "react-router-dom";

const OtherProfile = () => {
  const { uid } = useParams();
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${uid}`).then((data) => {
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

export default OtherProfile;
