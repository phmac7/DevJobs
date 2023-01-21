import { ReactElement } from 'react';

export interface ButtonProps {
  secondary?: boolean;
  label: string | ReactElement;
  padding?: string;
  onClick?: () => void
  id?: string;
  form?: string | undefined;
}

export interface CardJobProps {
    contract: string | undefined;
    position: string | undefined;
    companyName: string | undefined;
    location: string | undefined;
    companies: any
  }

