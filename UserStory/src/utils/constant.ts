import { MRT_ColumnDef } from "material-react-table";
import { StakHolderData } from "./types";
import { CapitalizationTableData } from "@/components/organism/CapitalizationTable";
import { ShareBarProps } from "@/components/atoms/ShareBar";

export const data: StakHolderData[] = [
  {
    id: 1,
    name: "Audrey Simmmons",
    firstName: "Audrey",
    lastName: "Simmmons",
    portfolioEmail: "ckctm12@gmail.com",
    contactEmail: "caringgene@aol.com",
    relationship: "Ex-employee",
    costCenter: "Product",
  },
  {
    id: 2,
    name: "Kris Roher",
    firstName: "Kris",
    lastName: "Roher",
    portfolioEmail: "tranthuy.nute@gmail.com",
    contactEmail: "hahiss@gmail.com",
    relationship: "Employee",
    costCenter: "Account management",
    ownerShip: 2,
  },
  {
    id: 3,
    firstName: "Chris",
    lastName: "Nhat",
    name: "Chris Nhat",
    portfolioEmail: "binhan628@gmail.com",
    contactEmail: "sopwith@outlook.com",
  },
  {
    id: 4,
    firstName: "Harry",
    lastName: "Peter",
    name: "Harry Peter",
    portfolioEmail: "manhhachkt08@gmail.com",
    contactEmail: "kassiesa@sbcglobal.net",
    relationship: "Ex-employee",
    costCenter: "Marketing",
    ownerShip: 16,
  },
  {
    id: 5,
    name: "George Harrington",
    firstName: "George",
    lastName: "Harrington",
    portfolioEmail: "nvt.isst.nute@gmail.com",
    contactEmail: "phyruxus@optonline.net",
    relationship: "Employee",
    costCenter: "R&D",
    ownerShip: 14,
  },
];

export const columnDefination: MRT_ColumnDef<StakHolderData>[] = [
  {
    accessorKey: "name",
    header: "STAKEHOLDER",
  },
  {
    accessorKey: "portfolioEmail",
    header: "PORTFOLIO EMAIL",
  },
  {
    accessorKey: "contactEmail",
    header: "CONTACT EMAIL",
  },
  {
    accessorKey: "relationship",
    header: "RELATIONSHIP",
    accessorFn: (data) => data.relationship ?? "-",
  },
  {
    accessorKey: "costCenter",
    header: "COST CENTER",
    accessorFn: (data) => data.costCenter ?? "-",
  },
  {
    accessorKey: "ownerShip",
    header: "OWNERSHIP",
    accessorFn: (data) => (data.ownerShip ? `${data.ownerShip} %` : "-"),
  },
  {
    id: "action",
    header: "",
    accessorFn: () => "...",
  },
];

export const CAPITALIZATION_TABLE_DATA_MOCKS: CapitalizationTableData[] = [
  {
    timelineItem: {
      name: "Common",
      color: "#8D7FFA",
      certificates: 22,
      raised: 756855,
      authorized: 1000000,
    },
    outstanding: 5350812,
    ownership1: 33289,
    fullDiluted: 5350812,
    ownership2: 25934,
  },
  {
    timelineItem: {
      name: "Series C Prefered",
      color: "#C3BBFA",
      certificates: 10,
      raised: 136855,
      authorized: 1000000,
    },
    outstanding: 5350812,
    ownership1: 33289,
    fullDiluted: 5350812,
    ownership2: 25934,
  },
  {
    timelineItem: {
      name: "Series A Prefered",
      color: "#C3BBFA",
      certificates: 32,
      raised: 856855,
    },
    outstanding: 5350812,
    ownership1: 33289,
    fullDiluted: 5350812,
    ownership2: 25934,
  },
  {
    timelineItem: {
      name: "Series B Prefered",
      color: "#C3BBFA",
      certificates: 22,
      raised: 156855,
      authorized: 1000000,
    },
    outstanding: 5350812,
    ownership1: 33289,
    fullDiluted: 5350812,
    ownership2: 25934,
  },
  {
    timelineItem: {
      name: "Outstanding",
      color: "#F2EBFF",
      certificates: 42,
      raised: 656455,
    },
    outstanding: 5350812,
    ownership1: 33289,
    fullDiluted: 5350812,
    ownership2: 25934,
  },
  {
    timelineItem: {
      name: "Series D Prefered",
      color: "#C3BBFA",
      certificates: 4,
      raised: 556855,
      authorized: 1000000,
    },
    outstanding: 5350812,
    ownership1: 33289,
    fullDiluted: 5350812,
    ownership2: 25934,
  },
];

export const SHARE_INDICATOR_MOCKS: ShareBarProps[] = [
  {
    percentage: 25.93,
    name: "common",
    color: "#8D7FFA",
  },
  {
    percentage: 17.6,
    name: "Series A",
    color: "#C3BBFA",
  },
  {
    percentage: 14.68,
    name: "Series B",
    color: "#C3BBFA",
  },
  {
    percentage: 16.68,
    name: "Series C",
    color: "#C3BBFA",
  },
  {
    percentage: 18.68,
    name: "Series D",
    color: "#C3BBFA",
  },
  {
    percentage: 30.93,
    name: "Outstanding",
    color: "#F2EBFF",
  },
];
