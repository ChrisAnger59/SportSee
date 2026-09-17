import Card from '../../atoms/Card'
import './ProfileDetails.css'

function ProfileDetails({ title="Votre profil", details, className=''}) {
    return (
        <Card className={`profile-details ${className}`.trim() }>
            <h2 className='profile-details__title'>{title}</h2>
            
            <dl className='profile-details__list'>
                {details.map((detail) =>
                    <div key={details.label} className='profile-details__item'>
                        <dt className='profile-details__term'>{detail.label} :</dt>
                        <dd className='profile-details__value'>{detail.value}</dd>
                    </div>
                )}
            </dl>
        </Card>
    )
}

export default ProfileDetails