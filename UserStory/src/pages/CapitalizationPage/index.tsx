import CapitalizationTable from "@/components/organism/CapitalizationTable";
import DashBoardTemplate from "@/components/templates/DashBoardTemplate";

const CapitalizationPage = () => {
  return (
    <DashBoardTemplate activeValue="capitalization">
      <CapitalizationTable />
    </DashBoardTemplate>
  );
};

export default CapitalizationPage;
