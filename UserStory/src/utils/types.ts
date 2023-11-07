import { CapitalItemProps } from "@/components/molecules/CapitalItem";

export type TypographyVarient =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "c1"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "b5"
  | "c1"
  | "c2";

export interface StakHolderData {
  id: number | string;
  firstName: string;
  lastName: string;
  name: string;
  portfolioEmail: string;
  contactEmail: string;
  relationship?: string;
  costCenter?: string;
  ownerShip?: number;
}

export type StackHolderFormType = "add" | "edit";
