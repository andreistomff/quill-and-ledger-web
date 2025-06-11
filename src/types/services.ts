
export type Service = {
  name: string;
  description: string;
  documents: string[];
};

export type InheritanceService = {
  name: string;
  description: string;
  assetTypes: {
    [key: string]: {
      label: string;
      documents: string[];
    };
  };
};

export type ServiceCategory = {
  id: string;
  title: string;
  services: Service[];
  inheritanceServices?: InheritanceService[];
};
