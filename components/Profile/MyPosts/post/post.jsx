import classes from "./post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/736x/fe/ed/6d/feed6d83eafba8f1e29bc97ec17b9907.jpg" alt="" />
            {props.message}

            <div>
                <span>Like counts {props.counts}</span>
                
            </div>
        </div>
    )
}

export default Post