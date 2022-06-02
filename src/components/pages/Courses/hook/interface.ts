export interface IUseFetchData {
  [key: string]: string | number,
}

export interface ICourse {
  name: string,
  id: string,
  description: string,
  testsIDs: string[],
}
