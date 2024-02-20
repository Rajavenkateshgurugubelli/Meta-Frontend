function DessertsList(props) {
  // Implement the component here.
  const dessertsWithCalories = props.data
  .filter((calorieDessert)=>{
    return calorieDessert.calories < 500
  })
  .sort((a,b)=>{
    return a.calories - b.calories
  })
  .map((calorieDessert)=>{
    return <li>{calorieDessert.name} - {calorieDessert.calories} cal </li> 
     
  });
  return  <ul>{dessertsWithCalories}</ul>
}

export default DessertsList;
