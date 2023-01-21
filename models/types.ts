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

export interface Companies {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    companyName:         string;
    logoBackgroundColor: string;
    createdAt:           Date;
    updatedAt:           Date;
    publishedAt:         Date;
    logo:                Logo;
}

export interface Logo {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           null;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    SVG = ".svg",
}

export enum MIME {
    ImageSVGXML = "image/svg+xml",
}

export enum Provider {
    Local = "local",
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