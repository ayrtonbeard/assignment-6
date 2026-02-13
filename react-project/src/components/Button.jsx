import "./Button.css";
export default function Button({ info, id, onClick }) {
  return (
    <div>
      <button className="button" id={id} onClick={onClick}>
        {info}
      </button>
    </div>
  );
}
