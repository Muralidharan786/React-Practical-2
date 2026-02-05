import "./Card.css";

function Card() {
    return (
    <>
        <h2 className="card">Card Component</h2>
        <button className="btn btn-success" onClick={() => alert("Hello")}>
        Click Me
         </button>
    </>
    );
}

export default Card;