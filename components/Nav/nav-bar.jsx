import classes from "./nav-bar.module.css";
const active = `${classes.item} ${classes.active}`

const Nav = () => {
    return <nav className={classes.nav}>

    <div className={active}>
      <a>Profile</a>
    </div>
    <div className={classes.item}>
      <a>Surgery</a>
    </div>
    <div className={classes.item}>
      <a>Questions</a>
    </div>
    <div className={classes.item}>
      <a>Exercises</a>
    </div>
    <div className={classes.item}>
      <a>Settings</a>
    </div>
    
  </nav>
}

export default Nav