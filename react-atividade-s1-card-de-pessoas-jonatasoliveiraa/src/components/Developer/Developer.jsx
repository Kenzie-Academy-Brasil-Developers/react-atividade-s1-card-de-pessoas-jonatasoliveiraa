import "./style.css";
function Developer(props) {
  return (
    <div className="divDevs">
      <h1>Dev: {props.name}</h1>
      <p>Idade: {props.age}</p>
      <p>País: {props.country}</p>
    </div>
  );
}
export default Developer;
