export class GenericResponse<T> {
  isSuccessful?: boolean;
  jsonBody?: string;
  data?: T;

  constructor(isSuccess: boolean, jsonBody: string, data: T) {
    this.isSuccessful = isSuccess;
    this.jsonBody = jsonBody;
    this.data = data;
  }
}
