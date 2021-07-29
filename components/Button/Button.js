import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={clsx(styles.button, styles[props.type], styles[props.color])}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;