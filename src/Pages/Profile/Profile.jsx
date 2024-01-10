import React from "react";
import ProfileUserDetails from "../../Components/Profile/ProfileUserDetails";
import ReqUserPost from "../../Components/Profile/ReqUserPost";

const Profile = () => {
  return (
    <div className="px-20">
      <div>
        <ProfileUserDetails />
      </div>
      <div>
        <ReqUserPost />
      </div>
    </div>
  );
};

export default Profile;
