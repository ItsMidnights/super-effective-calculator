import { AxiosError } from "axios";

export const isAxiosError = (err: any): err is AxiosError => {
  return err.isAxiosErr === true;
};
