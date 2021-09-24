import "./PrimaryBtn.css";
import cx from "classnames";

function PrimaryBtn({ className, title, handleSubmit }) {
  return (
    <button className={cx("primary-btn", className)} onClick={handleSubmit}>
      {title}
    </button>
  );
}

export default PrimaryBtn;
