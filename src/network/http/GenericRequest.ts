export interface GenericRequest {
  method: string;
  apiName: string;
  jsonBody?: string;
  httpHeaders?: {Accept: string; 'Content-Type': string};
}

// This is an another way to create request using Map

// export interface GenericRequest {
//   method: string;
//   apiName: string;
//   jsonBody?: string;
//   httpHeaders?: Map<string, string>;
// }
