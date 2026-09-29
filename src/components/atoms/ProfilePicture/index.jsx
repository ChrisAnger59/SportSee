import defaultProfilePicture from '../../../assets/default-profile-picture.png'
import './ProfilePicture.css'

function ProfilePicture({src, alt, size='lg', className='', ...rest}) {
  const classes = `profile-picture profile-picture--${size} ${className}`.trim()

  return (
    <img {...rest} className={classes} src={src || defaultProfilePicture} alt={alt} />
  )
}

export default ProfilePicture