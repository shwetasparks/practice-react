function List(props) {
   //   fruits.sort((a,b)=>a.name.localeCompare(b.name));//alphabetical
   // fruits.sort((a, b) => a.calories - b.calories);
   // const highCalfruits = fruits.filter((fruit) => fruit.calories > 80);
   const itemsList= props.items;
   const category=props.category;



   const lists = fruits.map((fruits) => (
      <li key={fruits.id}>
         {fruits.name}: &npsp;
         <b>{fruits.calories}</b>
      </li>
   ));

   return (
      <div>
         <h3>{category}</h3>
         <ol>{itemsList}</ol>
      </div>
   );
}

export default List;
