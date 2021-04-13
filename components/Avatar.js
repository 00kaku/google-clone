function Avatar({url}) {
    return <img 
            loading="lazy"
            src={url}
            alt="profile picture"
            className="rounded-full"
            />;
}

export default Avatar;