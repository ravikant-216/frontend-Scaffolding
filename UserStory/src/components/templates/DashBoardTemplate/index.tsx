import DropDown from "@/components/molecules/SubNavbar";
import Navbar from "@/components/molecules/Navbar";
import { Divider, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface DashBoardTemplateProps {
  children: React.ReactNode;
  activeValue?: string;
}

const DashBoardTemplate = ({
  children,
  activeValue = "stakeholders",
}: DashBoardTemplateProps): React.ReactNode => {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => {
    if (route === "capitalization") navigate(route);
    else navigate("/");
  };
  return (
    <Stack>
      <Navbar />
      <Divider />
      <DropDown activeValue={activeValue} handleClick={handleNavigate} />
      <Stack mt={7} mx={10}>
        {children}
      </Stack>
    </Stack>
  );
};

export default DashBoardTemplate;
