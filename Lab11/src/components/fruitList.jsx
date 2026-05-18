import '../App.css'
const FruitList = (Props) => {
    return (
        <div>
            <h1>Fruit List</h1>
            <ul className="fruits">
                {Props.fruitList.map((fruit, index) => <li>{fruit}</li>)}
            </ul>
        </div>
    )
}

export default FruitList;