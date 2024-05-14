import { Button, ButtonProps } from "antd";

import styles from "./DefaultButton.module.scss";

type DefaultButtonPropTypes = ButtonProps;

export const DefaultButton: React.FC<DefaultButtonPropTypes> = ({
  children,
  ...rest
}) => {
  return (
    <Button type="default" className={styles.button} {...rest}>
      {children}
    </Button>
  );
};
