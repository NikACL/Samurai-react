import classes from "./profile.module.css";

const Profile = () => {
  return <div className={classes.content}>
    <div>
      <img className={classes.img}src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/2123730.jpg' />
      </div>
      <div>
        My posts

      </div>
      <div className={classes.item}>
        post 1
      </div>
      <div className={classes.item}>
        post 2
      </div>
      <div className={classes.item}>
        post 3
      </div>
      <div className={classes.item}>
        post 4
      </div>
    </div>
}

    export default Profile