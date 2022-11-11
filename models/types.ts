import { ReactElement } from 'react';

export interface ButtonProps {
  secondary?: boolean;
  label: string | ReactElement;
  padding?: string;
}
