import Card from '../../atoms/Card'
import ProfilePicture from '../../atoms/ProfilePicture'
import UserIdentity from '../../molecules/UserIdentity'
import './ProfileCard.css'

function ProfileCard({ name, memberSince, picture, className=''}) {
    return (
        <Card className={`profile-card ${className}`.trim() }>
            <ProfilePicture src={picture} alt={name} size='md' />
            <UserIdentity name={name} memberSince={memberSince} />
        </Card>
    )
}

export default ProfileCard