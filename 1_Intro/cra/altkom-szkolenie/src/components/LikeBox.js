const LikeBox = ({likes}) => {
    console.log(likes);
    return (
        <div>
            <p>Likes: {likes}</p>
            <button>Like</button>
        </div>
    );
};

export default LikeBox;
