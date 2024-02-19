import { Link } from "react-router-dom";
import '../styles/Info.css';


function InfoPage() {
    return (
        <div className="infoPageContainer">
            <h1>How to use... </h1>
            <p>

            This app. provides an easy way to <b> monitor your calories consumed per day, and the types of foods you have been eating (i.e fruit and veg.). </b>

                <br></br>
                <br></br>

                By automatically calculating your calorie count, based on your entered amount, as well as your target number of a certain food type.

                <br></br>
                <br></br>

                Simply, add meals on the Dashboard (or add customized meals to the New Meal Page). Use the calendar to check your consumed meals and calorie count for any day.

                <br></br>
                <br></br>
            </p>
            <img className="infoImage" src="../src/images/info.jpg" alt="Info Sheet" />
        </div>
    );
}

export default InfoPage;
