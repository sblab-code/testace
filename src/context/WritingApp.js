import React from "react";
import Writing from "./Writing";
import { WritingProvider } from "./WritingContext";

const WritingApp = () => {
  return (
    <WritingProvider>
      <Writing />
    </WritingProvider>
  );
};

export default WritingApp;
