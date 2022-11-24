import "./comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  // TEMPORARY
  const comments = [
    {
      id: 1,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, reprehenderit!",
      name: "Hannah Baker",
      userId: 2,
      profilePic:
        "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    },
    {
      id: 2,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, reprehenderit!",
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://i.cbc.ca/1.6128145.1628713609!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/regina-john-doe.jpg",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment..." />
        <button>Post</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
