import { API_CALL_DESTINATION, API_CALL_METHOD } from './enums';

export type API_CALL = {
  destination: API_CALL_DESTINATION;
  method: API_CALL_METHOD;
  params: string;
};
