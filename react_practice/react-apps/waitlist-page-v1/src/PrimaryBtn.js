import './PrimaryBtn.css';

function PrimaryButton({ title, handleSubmit }) {
  return (
    <button className="primary-btn" handleSubmit={handleSubmit}>
      {title}
    </button>
  );
}

export default PrimaryButton;
