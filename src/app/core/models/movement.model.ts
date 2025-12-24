import { CategoryType } from "./enums";

export interface Movement {
  amount: number;
  date: string;
  description?: string;
  categoryName: string;
  categoryType: CategoryType;
}
