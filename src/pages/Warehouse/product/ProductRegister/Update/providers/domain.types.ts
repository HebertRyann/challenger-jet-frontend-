export type TypeGetAndSetAndValidateAba<T> = {
  getData: () => T;
  setData: (data: T) => void;
  validate: () => boolean;
};

export type FieldWithIdName = {
  id: string;
  name: string;
};

export type EntityWithIdAndNameFieldAndParentId = {
  id: string;
  name: string;
  parent_id: string | null;
};

export type TypeErroProps = {
  isError: boolean;
};

export type HasVariation = {
  hasVariation?: boolean;
  name: string;
};

export type TypeGenericValueWithError<T> = {
  value: T;
  error: TypeErroProps;
};

export type TypeValidationResult = {
  labelName: string;
  linkName: string;
};

export type TypeValitionResolve = {
  validate: () => TypeValidationResult[];
};

export type TypeDataOverViewProps = {
  typeSelectProdut: TypeGenericValueWithError<FieldWithIdName>;
  categoryCost: TypeGenericValueWithError<FieldWithIdName>;
  subCategoryCost: TypeGenericValueWithError<FieldWithIdName>;
  groupProduct: TypeGenericValueWithError<FieldWithIdName>;
  hasVariation: TypeGenericValueWithError<HasVariation>;
  nameProduct: TypeGenericValueWithError<string>;
};

export type TypeValueAndError = {
  value: string;
  error: TypeErroProps;
};

export type TypeDetailsProps = {
  weight: TypeValueAndError;
  width: TypeValueAndError;
  height: TypeValueAndError;
  length: TypeValueAndError;
  descriptionAndDetails: TypeValueAndError;
  technicalSpecification: TypeValueAndError;
  wayOfUse: TypeValueAndError;
};

export type TypeStockProps = {
  unitMensured: TypeGenericValueWithError<FieldWithIdName>;
  stockCurrent: TypeValueAndError;
  replacementPoint: TypeValueAndError;
  priceCost: TypeValueAndError;
  priceSale: TypeValueAndError;
};

export type TypePriceCompositionProps = {
  profit: TypeValueAndError;
  ipi: TypeValueAndError;
  cost: TypeValueAndError;
  dif: TypeValueAndError;
};

export type AtributesList = {
  id: string;
  name: string;
  keyParent: string;
};

export type TypeHasVariation = {
  key: number;
  unitMensured: TypeGenericValueWithError<FieldWithIdName>;
  currentStock: TypeValueAndError;
  replacementPoint: TypeValueAndError;
  priceCost: TypeValueAndError;
  priceSale: TypeValueAndError;
  atributes: TypeGenericValueWithError<AtributesList>[];
};

export type ResolverDataOverView = {
  changeTypeProduct: (typeProduct: FieldWithIdName) => void;
  changeCategoryCost: (categoryCost: FieldWithIdName) => void;
  changeSubCategoryCost: (subCategoryCost: FieldWithIdName) => void;
  changeGroupProduct: (groupProduct: FieldWithIdName) => void;
  changeNameProduct: (nameProduct: string) => void;
  changeHasVariation: (hasVariation: HasVariation) => void;
};

export type TypeGetAndSetDataOverView<T> = {
  getData: () => T;
  setData: ResolverDataOverView;
  validate: () => boolean;
};

export type ResolverHasVariation = {
  changeUnitMensured: (unitMensured: FieldWithIdName, index: number) => void;
  changeCurrentStock: (stock: string, index: number) => void;
  changeCurrentReplacementPoint: (
    replacementPoint: string,
    index: number,
  ) => void;
  changePriceSale: (priceSale: string, index: number) => void;
  changePriceCost: (priceCost: string, index: number) => void;
  changeAtributes: (variation: AtributesList, x: number, y: number) => void;
  addAtributes: () => void;
  removeAtributes: () => void;
  addVariation: () => void;
  removeVariation: (index: number) => void;
};

export type TypeGetAndSetHasVariation<T> = {
  getData: () => T;
  setData: ResolverHasVariation;
  validate: () => boolean;
};

export type TypeProduct = {
  nameProduct: TypeValueAndError;
  amount: TypeValueAndError;
  cost: TypeValueAndError;
  subtotal: TypeValueAndError;
};

export type ResolverComposition = {
  changeInputNameProduct: (name: string, index: number) => void;
  changeInputProductIdAndStockId: (
    product_id: number,
    stockId: number,
    index: number,
  ) => void;
  loadInputProductIdAndStockId: () => {
    productId: number;
    stockId: number;
  }[];
  changeInputAmount: (amount: string, index: number) => void;
  changeInputCost: (cost: string, index: number) => void;
  changeInputSubTotal: (subtotal: string, index: number) => void;
  addComposition: () => void;
  removeComposition: (index: number) => void;
};

export type TypeGetAndSetComposition<T> = {
  getData: () => T;
  setData: ResolverComposition;
  validate: () => boolean;
};

export type ResolverFiscal = {
  changeNCM: (ncm: string) => void;
  changeCFOP: (cfop: string) => void;
  changeIcmsTaxeIssue: (taxeIssue: FieldWithIdName) => void;
  changeIcmsOrigem: (origem: FieldWithIdName) => void;
  changeIpiTaxeIssue: (taxeIssue: FieldWithIdName) => void;
  changePisTaxeIssue: (taxeIssue: FieldWithIdName) => void;
  changeCofinsTaxeIssue: (taxeIssue: FieldWithIdName) => void;
};

export type TypeFiscal = {
  ncm: TypeValueAndError;
  cfop: TypeValueAndError;
  icms: {
    taxesIssue: TypeGenericValueWithError<FieldWithIdName>;
    origem: TypeGenericValueWithError<FieldWithIdName>;
  };
  ipi: {
    taxesIssue: TypeGenericValueWithError<FieldWithIdName>;
  };
  pis: {
    taxesIssue: TypeGenericValueWithError<FieldWithIdName>;
  };
  cofins: {
    taxesIssue: TypeGenericValueWithError<FieldWithIdName>;
  };
};

export type TypeGetAndSetFiscal<T> = {
  getData: () => T;
  setData: ResolverFiscal;
  validate: () => boolean;
};

export type ResultOnSaveProdut = {
  code: number;
  data?: {
    id: number;
    name: string;
    type: string;
  };
};

type DetailsProduct = {
  weight: number;
  width: number;
  height: number;
  length: number;
  description_details: string;
  technical_specification: string;
  way_use: string;
};

export type TypeProductDataOverView = {
  type: string;
  category_cost_id: number;
  subcategory_cost_id: number;
  product_category_id: number;
  name: string;
  has_variation: boolean;
  details: DetailsProduct;
};

export type TypeAtributes = {
  key: number;
  value: number;
};

export type TypeProductStock = {
  unit_mensured_id: number;
  replacement_point: number;
  current_stock: number;
  price_sale: number;
  price_cost: number;
  atributes: TypeAtributes[];
};

export type PriceCompositionAndFiscal = {
  price_composition: {
    margin_profit: number;
    ipi: number;
    fixed_cost: number;
    dif: number;
  };
  fiscal: {
    ncm: number;
    cfop: number;
    icms_tax_situation: number;
    icms_tax_origem: number;
    ipi_tax_situation: number;
    pis_tax_situation: number;
    cofins_tax_situation: number;
  };
};

export type CompositionRequest = {
  product_id: number;
  stock_id: number;
  name: string;
  amount: number;
  cost: number;
};
