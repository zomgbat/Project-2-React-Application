import "../styles/MealListCard.css";

function MealListCard(props) {

    //const name = props.meal.name;
    const {id, name, calories, img} = props.meal;
    const index = props.index;
    const deleteMeal = props.deleteMeal;
    return(
        <div id="meal-card">
            <img src={img} alt={`${name}`}></img>
            <p>{`${name}` /*${id} ${index}*/}</p>
            <p id="card-footer">{`${calories} cal`} <button onClick={()=>{deleteMeal(index)}}>❌</button></p>
        </div>
    )
}

export default MealListCard;