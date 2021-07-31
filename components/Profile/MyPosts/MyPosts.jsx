import classes from "./MyPosts.module.css";
import Post from "./post/post";

const MyPosts = () => {
  return  <div>
    <div>
      My posts

    </div>
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
   <Post />
   <Post />
  </div>
}

export default MyPosts