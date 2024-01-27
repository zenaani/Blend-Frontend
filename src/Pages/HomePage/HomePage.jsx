import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard";
import axios from "axios";

const HomePage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/post").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      <div className="mt-10 flex w-[100%] justify-center">
        <div className="w-[44%] px-10">
          <div className="storyDiv flex gap-6 border p-4 rounded-md justify-start w-full">
            {[1, 1, 1].map((item) => (
              <StoryCircle />
            ))}
          </div>

          <div className="space-y-10 w-full mt-10">
            {post.map((item, i) => (
              <div key={i}>
                <PostCard
                  userId={item?.userId}
                  image={item?.image}
                  caption={item?.caption}
                  timestamp={item?.timestamp}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[35%]">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
