import Card from '../../atoms/Card'
import ProfilePicture from '../../atoms/ProfilePicture'
import HighlightStat from '../../molecules/HighlightStat'
import UserIdentity from '../../molecules/UserIdentity'
import './UserBanner.css'

function UserBanner({ name, memberSince, totalDistance, picture}) {
    return (
        <Card className='user-banner'>
            <div className='user-banner__identity'>
                <ProfilePicture src={picture} alt={name} size='lg' />
                <UserIdentity name={name} memberSince={memberSince} />
            </div>

            <HighlightStat label="Distance totale parcourue" value={totalDistance} />
        </Card>
    )
}

export default UserBanner