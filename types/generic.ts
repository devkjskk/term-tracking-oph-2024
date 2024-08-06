export interface IResponse<T> {
  success: boolean;
  currentCount: number;
  totalCount: number;
  payload: T[];
  // option: any; // Replace 'any' with the specific type if known, or set to 'null' if always null
}
