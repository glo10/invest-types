import { AimsType } from "./company/aims";
import { PartType } from "./others/part";
import { PerspectiveType } from "./company/perspective";
import { ProductType } from "./company/product";
import { LabelValueType } from "./others/label-value";

export interface CompanyType {
  name?: string | null;
  sumup?: (string | null)[];
  main_sector?: string | null;
  sectors?: string[];
  is_cyclical?: boolean;
  logo?: string;
  aims?: AimsType;
  perspective?: PerspectiveType;
  activities?: PartType[];
  products?: ProductType[];
  sales_by_product?: LabelValueType[];
  sales_by_region?: LabelValueType[];
  calendar?: { date: Date; label: string }[];
  employees?: string;
}
