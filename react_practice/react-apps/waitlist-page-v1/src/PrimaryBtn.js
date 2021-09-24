import "./PrimaryBtn.css";

function PrimaryButton({ title, handleSubmit }) {
  return (
    <div className="primary-btn" handleSubmit={handleSubmit}>
      {title}
    </div>
  );
}

export default PrimaryButton;
