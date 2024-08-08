import React from "react";
import getQueryClient from "../utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const Custom404 = () => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </QueryClientProvider>
  );
};

export default Custom404;
