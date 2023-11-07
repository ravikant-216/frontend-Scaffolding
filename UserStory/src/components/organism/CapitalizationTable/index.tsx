import CapitalItem, {
  CapitalItemProps,
} from "@/components/molecules/CapitalItem";
import DataTable from "@/components/molecules/DataTable";
import SearchTextField from "@/components/molecules/SearchTextField";
import ShareIndicator from "@/components/molecules/ShareIndicator";
import DownArrow from "@/../public/assets/Icons/downArrow.svg";
import Calender from "@/../public/assets/Icons/calender.svg";
import theme from "@/theme";
import {
  CAPITALIZATION_TABLE_DATA_MOCKS,
  SHARE_INDICATOR_MOCKS,
} from "@/utils/constant";
import { formatNumberWithCommas } from "@/utils/numberUtil";
import { Divider, Stack, Typography } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import Icon from "@/components/atoms/Icon";

export interface CapitalizationTableData {
  timelineItem: CapitalItemProps;
  outstanding: number;
  ownership1: number;
  fullDiluted: number;
  ownership2: number;
}

const columnDefs: MRT_ColumnDef<CapitalizationTableData>[] = [
  {
    id: "timelineItem",
    header: "",
    Cell: ({ row }) => {
      const { timelineItem } = row.original;
      return <CapitalItem {...timelineItem} />;
    },
  },
  {
    header: "Outstanding",
    accessorFn: (originalRow) =>
      formatNumberWithCommas(originalRow.outstanding),
    size: 80,
  },
  {
    id: "ownership1",
    header: "Ownership",
    accessorFn: (originalRow) =>
      `${formatNumberWithCommas(originalRow.ownership1)}%`,
    size: 80,
  },
  {
    header: "Fully Diluted",
    accessorFn: (originalRow) =>
      formatNumberWithCommas(originalRow.fullDiluted),
    size: 80,
  },
  {
    id: "ownership2",
    header: "Ownership",
    accessorFn: (originalRow) => formatNumberWithCommas(originalRow.ownership2),
    size: 80,
  },
];

const CapitalizationTable = () => {
  return (
    <DataTable
      data={CAPITALIZATION_TABLE_DATA_MOCKS}
      columnsDefination={columnDefs as MRT_ColumnDef[]}
      enableTopToolbar={true}
      enableRowSelection={false}
      renderTopToolbar={() => (
        <Stack gap={6} mb={5}>
          <Typography variant="h1">Capitalization</Typography>
          <Stack direction="row" justifyContent="space-between">
            <SearchTextField disabled={true} />
            <Stack
              direction="row"
              gap={2}
              sx={{
                borderRadius: "4px",
                border: `1px solid ${theme.palette.grey[200]}`,
                boxShadow:
                  "0px 2px 5px 0px rgba(60, 66, 87, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)",
                p: 2,
              }}
            >
              <Stack direction="row" gap={2}>
                <Typography>Last 7 days</Typography>
                <Icon src={DownArrow} alt="DownArrow" />
              </Stack>
              <Divider flexItem orientation="vertical" />
              <Stack direction="row" gap={2}>
                <Icon src={Calender} alt="DownArrow" />
                <Typography>May 28-Jun 3</Typography>
              </Stack>
            </Stack>
          </Stack>
          <ShareIndicator shares={SHARE_INDICATOR_MOCKS} />
        </Stack>
      )}
    />
  );
};

export default CapitalizationTable;
