export interface CompanyType {
  name?: string | null;
  sumup?: (string | null)[];
  main_sector?: string | null;
  sectors?: string[];
  is_cyclical?: boolean;
  logo?: string;
  aims?: {
    short?: string;
    middle?: string;
    long?: string;
  };
  features?: {
    perspective?: {
      current_year: string;
      pasts: string[];
    };
  };
  activities?: Part[];
  products?: { name: string; isPrimary: boolean }[];
  sales_by_product?: { label: string; value: number }[];
  sales_by_region?: { label: string; value: number }[];
  calendar?: { date: Date; label: string }[];
  employees?: string;
}
