import '../styles/Info.css';


function InfoPage() {
    return (

        <div>

            <div className="infoPageContainer">
                <h2> Where to start </h2>
                <p>
                    Tomasure provides an easy way to <span> monitor your daily calories, and the types of foods you have been eating (i.e fruit and veg.). </span>
                    {/* REFACTOR 👇 (let's implement the spaces with css and other tags) */}
                    <br></br>
                    <br></br>

                    By automatically calculating your calorie count, based on your entered amount, as well as your target number of a certain food type.

                    <br></br>
                    <br></br>

                    Simply, add meals on the Dashboard (or add customized meals to the New Meal Page). Use the calendar to check your consumed meals and calorie count for any day.

                    <br></br>
                    <br></br>
                </p>
                <img className="infoImage" src="../src/assets/info.png" alt="Info Sheet" />
            </div>
        </div>
    );
}

export default InfoPage;
