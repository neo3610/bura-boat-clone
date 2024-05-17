import React from "react";
import { Drawer, DrawerProps } from "antd";
import styles from "./CustomDrawer.module.scss";
export const CustomDrawer: React.FC<DrawerProps> = ({ children, ...rest }) => {
  return (
    <Drawer
      placement="right"
      width={"70%"}
      className={styles.customDrawer}
      {...rest}
    >
      {children}
    </Drawer>
  );
};
