import { classNames } from "../../../utils/classnames";
import "./Spinner.css";

interface SpinnerProps {
  isFullPage?: boolean;
}

export const Spinner = ({ isFullPage }: SpinnerProps) => {
  return (
    <div className={classNames(isFullPage && "full-page")}>
      <span className="spinner" />
    </div>
  );
};
