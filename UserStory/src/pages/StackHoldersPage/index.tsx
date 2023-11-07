import React from "react";
import DashBoardTemplate from "@/components/templates/DashBoardTemplate";
import AllStackHolder from "@/components/organism/AllStackHolders";

const StackHoldersPage = (): React.ReactNode => {
  return (
    <DashBoardTemplate>
      <AllStackHolder />
    </DashBoardTemplate>
  );
};

export default StackHoldersPage;
