import defaultProfilePicture from '../../../assets/default-profile-picture.png'
import './ProfilePicture.css'

function ProfilePicture({src, alt, size='lg', className='', ...rest}) {
  const classes = `profile-picture profile-picture--${size} ${className}`.trim()

  const handleError = (event) => {
    event.currentTarget.onerror = null
    event.currentTarget.src = defaultProfilePicture
  }

  return (
    <img {...rest} className={classes} src={src || defaultProfilePicture} alt={alt} onError={handleError} />
  )
}

export default ProfilePicture