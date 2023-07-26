import { IPhoto } from './IPhoto'

export interface IPropsMainGrid {
  setPage: React.Dispatch<React.SetStateAction<number>>
  photos: IPhoto[]
  loading: boolean
}