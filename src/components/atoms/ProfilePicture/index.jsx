import './ProfilePicture.css'

function ProfilePicture({src, alt, size='lg', className=''}) {
    const classes = `profile-picture profile-picture--${size} ${className}`.trim()

    if (!src) {
        return (
            <div className={`${classes} profile-picture--empty`} role="img" aria-label={alt}>
                Photo
            </div>
        )
    }

    return (
        <img className={classes} src={src} alt={alt} />
    )
}

export default ProfilePicture