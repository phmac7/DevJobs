export interface Sys {
    id: string;
    createdAt: string;
}

interface Asset {
    fields: {
      title: string;
      description: string;
      file: {
        contentType: string;
        details: {
          image: {
            height: number;
            width: number;
          };
          size: number;
        };
        url: string;
        fileName: string;
      };
    };
  }

export interface Job {
    fields: {
        company: Company;
        contractType: ContractType;
        description: string;
        location: JobLocation;
        requirements: string;
        slug: string;
        tasks: string;
        title: string;
        website:string;
    }
    sys: Sys;
}

export interface Company {
    fields: {
        logo: Asset;
        logoBackground: string;
        name: string;
        website: string;
    }
    sys: Sys;
}

export interface JobLocation {
    fields: {
        country: string;
    }
    sys: Sys;
}

export interface ContractType {
    fields: {
        name: string;
    }
    sys:Sys;
}