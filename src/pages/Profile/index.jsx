import './Profile.css'

// Profil de l'utilisateur courant — données statiques pour l'instant.
const currentUser = {
  name: 'Sophie Martin',
  position: 'Développeuse Full-Stack',
  department: 'Technique',
  email: 'sophie.martin@shiny.com',
  phone: '01 23 45 67 89',
  location: 'Paris, France',
  bio: "Développeuse passionnée avec 5 ans d'expérience en React et Node.js. Spécialisée dans les applications web modernes et les interfaces soignées.",
  skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'CSS'],
}

function Profile() {
  const initials = currentUser.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <div className="page">
      <section className="page-header">
        <h1>Mon Profil 👤</h1>
        <p>Vos informations personnelles.</p>
      </section>

      <section className="profile-card">
        <div className="profile-identity">
          {/* Placeholder avatar — à remplacer par la photo de l'utilisateur */}
          <div className="profile-avatar" role="img" aria-label={currentUser.name}>
            {initials}
          </div>
          <div>
            <h2>{currentUser.name}</h2>
            <p className="profile-position">{currentUser.position}</p>
            <p className="profile-department">{currentUser.department}</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>À propos</h3>
          <p>{currentUser.bio}</p>
        </div>

        <div className="profile-section">
          <h3>Coordonnées</h3>
          <ul className="profile-details">
            <li>
              <span className="profile-label">Email</span>
              <span>{currentUser.email}</span>
            </li>
            <li>
              <span className="profile-label">Téléphone</span>
              <span>{currentUser.phone}</span>
            </li>
            <li>
              <span className="profile-label">Localisation</span>
              <span>{currentUser.location}</span>
            </li>
          </ul>
        </div>

        <div className="profile-section">
          <h3>Compétences</h3>
          <ul className="profile-skills">
            {currentUser.skills.map((skill) => (
              <li key={skill} className="profile-skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Profile
