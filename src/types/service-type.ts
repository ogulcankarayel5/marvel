
export interface IParameters {
  endpoint: string;
  params?: object | null|string;
 
}

type Methods = "get" | "post";



export interface IAxiosParameters extends IParameters {
  method: Methods;
}
