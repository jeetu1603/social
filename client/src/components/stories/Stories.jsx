import "./stories.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  // TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    },
    {
      id: 5,
      name: "John Doe",
      img: "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
