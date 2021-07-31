import MyPosts from "./MyPosts/MyPosts.jsx";
import classes from "./profile.module.css";

const Profile = () => {
  return <div className={classes.content}>
    <div>
      <img className={classes.img}src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/2123730.jpg' />
      </div>
   <MyPosts />
    </div>
}

    export default Profile