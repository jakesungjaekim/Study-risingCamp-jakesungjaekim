import React from 'react';
import { IPhoto } from './IPhoto';

export interface IPropsDaisyCarousel {
  data: IPhoto[]
  onChangeSort: React.Dispatch<React.SetStateAction<string>>
}