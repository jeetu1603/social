import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  // TEMPORARY DATA
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      name: "Hannah Baker",
      userId: 2,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
