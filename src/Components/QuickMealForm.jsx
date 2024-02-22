function QuickMealForm(props) {
    
    // const handleSubmit = props.handleSubmit;
    // const addQuickMeal = props.addQuickMeal;
    const {name, calories, description, img, setName, setCalories, setDescription, setImg, handleSubmit, addQuickMeal} = props;

    return(
        <form className="quick-meal-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Photo URL:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            addQuickMeal({ name, calories, description, img });
          }}
        >
          Add quick meal
        </button>
      <button className="btn" onClick={()=>console.log(setShowForm(!showForm))}>Close Form</button>
      </form>
    )
}

export default QuickMealForm;