import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <p>
        Welcome to Tomasure! Our goal with this app is to make your life easier
        and provide you with a tool to assist on your nutritional health journey.
      </p>
      <p>
        We hope it proves useful, and that you enjoy using it every day. We had a great time creating it as newbies to web and app development!
      </p>

      {/*<p>
        Welcome to the Calorie Counter App; our purpose is to make your life
        easier and provide wellness to your daily life routine. We hope ypu
        enjoy it, as we did when we create it as newbies en the web dev apps.
        The creators come from different fields and countries but unite their
        master minds to create this unique app.{" "}
  </p>*/}

      <div className="creators">
        <h2>The Team</h2>
        {/* <h5> Member 1 : </h5> */}
        <h5>Gavin Alexander </h5>
        <p>
          Gavin is a talented and creative writer originating from Ayr, Scotland. He loves football and fruit.
        </p>
        <img
          className="developer1-image"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fmarcelusironhack%2Fimage%2Fupload%2Fv1707918996%2Foctopus_tl8zpl.webp"
          alt="Photo of Gavin"
        />

        {/* <h5> Member 2 : </h5> */}
        <h5> Barbara Lancuba </h5>
        <p>
          {" "}
          Barbara is an architect and designer originating from Buenos Aires, Argentina. She is an avid runner, tennis player, vegetarian, and animal lover.
        </p>
        <img
          className="developer2-image"
          src="https://res.cloudinary.com/marcelusironhack/image/upload/v1707919010/clairvoyant-ball_hhgpa1.webp"
          alt="Photo of Barbara"
        />

        {/* <h5> Member 3 : </h5> */}
        <h5> Kumar Daryanani</h5>
        <p>
          {" "}
          Kumar has many years of experience designing and programming games. Born and raised in Barcelona, Spain, he loves playing video games eating food from across the world.
        </p>
        <img
          className="developer3-image"
          src="https://res.cloudinary.com/marcelusironhack/image/upload/v1707918737/wizard_pzrnen.webp"
          alt="Photo of Kumar"
        />
      </div>
    </div>
  );
}
export default AboutPage;
