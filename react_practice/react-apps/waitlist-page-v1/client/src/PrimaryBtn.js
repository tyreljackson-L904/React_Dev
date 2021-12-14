import "./PrimaryBtn.css";
import cx from "classnames";

function PrimaryBtn({ className, title, onClick }) {
  return (
    <button className={cx("primary-btn", className)} onClick={onClick}>
      {title}
    </button>
  );
}

export default PrimaryBtn;
