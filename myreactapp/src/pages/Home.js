import "./Home.css";

function Home() {
  return (
    <div className="parent">
      <div className="div1">
        <h2>
          My Name is
          <br /> Abdul Rehman Z.
        </h2>
      </div>
    </div>
  );
}

function Lists() {
  const cars = ["BMW", "Audi", "Mercedes", "Toyota"];
  const listItems = cars.map((car, index) => <li key={index}>{car}</li>);

  return <ul>{listItems}</ul>;
}

export { Home, Lists };
