import Card from '../../components/atoms/Card'
import TextLink from '../../components/atoms/TextLink'
import SectionHeader from '../../components/molecules/SectionHeader'
import './Contact.css'

const EMAIL = 'contact@sportsee.example'

function Contact() {
  return (
    <div className='contact'>
      <SectionHeader
        title='Contact'
        subtitle='Une question, une suggestion ? Écrivez-nous.'
      />

      <Card className='contact__card'>
        <dl className='contact__list'>
          <div className='contact__item'>
            <dt className='contact__label'>E-mail</dt>
            <dd className='contact__value'>
              <TextLink className='contact__link' href={`mailto:${EMAIL}`}>
                {EMAIL}
              </TextLink>
            </dd>
          </div>

          <div className='contact__item'>
            <dt className='contact__label'>Délai de réponse</dt>
            <dd className='contact__value'>Sous 48 heures ouvrées</dd>
          </div>

          <div className='contact__item'>
            <dt className='contact__label'>Horaires</dt>
            <dd className='contact__value'>Du lundi au vendredi, de 9 h à 18 h</dd>
          </div>
        </dl>
      </Card>
    </div>
  )
}

export default Contact
