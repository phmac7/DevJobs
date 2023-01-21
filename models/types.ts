import { ReactElement } from 'react';
import { Company } from './contetful';

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
    companies: Company[],
    createdAt: string
  }

