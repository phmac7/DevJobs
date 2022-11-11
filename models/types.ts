import { ReactElement } from 'react';

export interface ButtonProps {
  secondary?: boolean;
  label: string | ReactElement;
  padding?: string;
  onClick?: () => void;
  id?: string;
}

export interface Jobs {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    position:       string;
    contract:       string;
    location:       string;
    websiteToApply: string;
    website:        string;
    description:    string;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date;
    requirements:   string;
    role:           string;
    company:        Company;
}

export interface Company {
    data: Data | null;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    companyName:         string;
    logoBackgroundColor: string;
    createdAt:           Date;
    updatedAt:           Date;
    publishedAt:         Date;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
