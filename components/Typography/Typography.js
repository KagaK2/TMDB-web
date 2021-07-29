import styles from "./Typography.module.scss";

const Typography = (props) => {
  const Component = props.tag in TypographyTagsEnum ? props.tag : "p";

  return (
    <Component className={styles[props.variant]} {...props}>
      {props.children}
    </Component>
  );
};

const TypographyTagsEnum = {
  h1 : 'h1',
  h2 : 'h2',
  h3 : 'h3',
  h4 : 'h4',
  h5 : 'h5',
  h6 : 'h6',
  p : 'p',
}

export default Typography;
