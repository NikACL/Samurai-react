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
   <Post message="Hi, how are you?" counts="5"/>
   <Post message="It is my first post" counts="10"/>
  </div>
}

export default MyPosts