import '../styles/AboutPage.css'

function AboutPage() {
  return (
    <div className="about-container">
        <p>
          Welcome to the Calorie Counter App; our purpose is to make your life easier and provide wellness to your daily life routine.
          We hope ypu enjoy it, as we did when we create it as newbies en the web dev apps.
          The creators come from different fields and countries but unite their master minds to create this unique app. 
        </p>

        <div className="creators">
        <h5> Member 1 : </h5>
          <h6>Gavin Alexander </h6>
          <p> Talented writer and creative mind based on Scotland, Ayr. He loves football and fruits.</p>
          <img className="developer1-image" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fmarcelusironhack%2Fimage%2Fupload%2Fv1707918996%2Foctopus_tl8zpl.webp" alt="Photo of Gavin"  />

          <h5> Member 2 : </h5>
          <h6> Barbara Lancuba </h6>
          <p> Architect and designer, based on Argentina, Buenos Aires. Runner and tennis player, vegetarian and animal lover.
          </p>
          <img className="developer2-image" src="https://res.cloudinary.com/marcelusironhack/image/upload/v1707919010/clairvoyant-ball_hhgpa1.webp" alt="Photo of Barbara"  />

          <h5> Member 3 : </h5>
          <h6> Kumar Daryanani</h6>
          <p> Game designer, with a natural talent for programming; based on Span, Barcelona. He loves playing video games and read nutrition books.</p>
          <img className="developer3-image" src="https://res.cloudinary.com/marcelusironhack/image/upload/v1707918737/wizard_pzrnen.webp" alt="Photo of Kumar"  />
        </div>
      </div>

  )
}
export default AboutPage