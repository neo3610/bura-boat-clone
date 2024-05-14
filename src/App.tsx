import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider } from "antd";

export const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            handleSize: 28,
          },
        },
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
