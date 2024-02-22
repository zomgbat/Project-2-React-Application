import '../styles/Info.css';


function InfoPage() {
    return (

        <div>
            <div className="infoPageContainer">
                <h2> Where to start </h2>
                <p className="infopara1"> Tomasure provides an easy way to <span> monitor your daily calories, and the types of foods you have been eating (i.e fruit and veg.). </span> </p>
                <p className="infopara2">  By automatically calculating your calorie count, based on your entered amount, as well as your target number of a certain food type. </p>
                <p className="infopara3">  Simply, add meals on the Dashboard (or add customized meals to the New Meal Page). Use the calendar to check your consumed meals and calorie count for any day. </p>
                <img className="infoImage" src="../src/assets/info.png" alt="Info Sheet" />
            </div>
        </div>
    );
}

export default InfoPage;

 
 
