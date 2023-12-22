import './Contact.scss'

function contact() {

  return (
    <div className="contact" id='contact'>
      <div className="contact-details" style={{ backgroundColor: 'black' }}>
        <div className="details">
          <div className="contact-information">
            <p>Bengaluru, India</p>
            <br/>
            <a href="mailto:er.ayandhiman@gmail.com">er.ayandhiman@gmail.com</a>
            <br/>
            <a href="tel:+148126287560">+91 9915884435</a>
            <br/><br/>
            <a href="https://www.linkedin.com/in/ayan-dhiman/" ><div className='link1'>LinkedIn</div></a>
            <br/>
            <a href="mailto:er.ayandhiman@gmail.com" ><div className='link2' >Mail</div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact