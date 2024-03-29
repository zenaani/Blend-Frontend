import React, { useEffect, useState, useContext } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";

const NewPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const [imageURL, setImageURL] = useState("");

  const { setUserId, userId } = useContext(UserContext);

  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `posts/${image.name}`);
    uploadBytes(imageRef, image).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        console.log(val);
        setImageURL(val);

        try {
          axios
            .post(`http://localhost:8080/user/savePost?id=${userId}`, {
              image: imageURL,
              caption: caption,
              timestamp: "11 O clock",
            })
            .then((response) => {
              console.log(response);
            });
        } catch (error) {
          console.log(error.message);
        }
      });
      console.log("Image Posted");
    });
  };

  return (
    <div>
      <input
        placeholder="caption"
        type="text"
        onChange={(event) => {
          setCaption(event.target.value);
        }}
      ></input>
      <br></br>
      <label for="upload">Upload image</label>
      <br></br>
      <input
        id="upload"
        type="file"
        accept="image/jpeg image/png"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      ></input>
      <br></br>
      <button onClick={uploadImage} className="bg-red-600 p-10">
        Post Image
      </button>
    </div>
  );
};

export default NewPost;
