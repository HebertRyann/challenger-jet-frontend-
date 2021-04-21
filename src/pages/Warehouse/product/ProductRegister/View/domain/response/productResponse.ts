export type Atributes = {
  id: number;
  parent_id: number | null;
  key: string;
  value: string;
};

export type CompositonView = {
  name: string;
  cost: number;
  amount: number;
};

export type FiscalView = {
  ncm: number;
  cfop: number;
  icms: {
    stateTaxe: string;
    origem: string;
  };
  ipi: {
    stateTaxe: string;
    origem: string;
  };
  pis: {
    stateTaxe: string;
    origem: string;
  };
  confins: {
    stateTaxe: string;
    origem: string;
  };
};

export type PriceCompositionView = {
  dif: number;
  ipi: number;
  fixed_cost: number;
  margin_profit: number;
};

export type ProductResponse = {
  id: number;
  name: string;
  composition: string | undefined;
  created_at: string;
  updated_at: string;
  deleted_at: string | undefined;
  details: string;
  fiscal: string | null;
  price_composition: string | null;
  type: string;
  subfinancial_category: {
    id: number;
    name: string;
  };
  financial_category: {
    id: number;
    name: string;
  };
  product_category: {
    id: number;
    name: string;
  };
  stocks: [
    {
      unit_mensured_id: number;
      current_stock: number;
      replacement_point: number;
      prices: string | null;
      atributes: string | null;
      details: string | null;
    },
  ];
};
