import './UserIdentity.css'

function UserIdentity({ name, memberSince, className=''}) {
    return (
        <div className={`user-identity ${className}`.trim() }>
            <h1 className='user-identity__name'>{name}</h1>
            <p className='user-identity__since'>Membre depuis le {memberSince}</p>
        </div>
    )
}

export default UserIdentity