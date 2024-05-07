export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

// T , le rendre generique , accept n'import quell type , produit .....

export interface AppDataState<T> {
  dataState:DataStateEnum,
  data?:T,
  errorMessage?:string
}
