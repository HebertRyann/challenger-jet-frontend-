import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type EntityWithIdAndNameFieldAndParentId = {
  id: string;
  name: string;
  parent_id: string | null;
};

type EntityWithIdAndNameField = {
  id: string;
  name: string;
};

type HasVariation = {
  hasVariation?: boolean;
  name: string;
};

type TypeGenericValueWithError<T> = {
  value: T;
  error: TypeError;
};

type TypeDataOverViewProps = {
  typeSelectProdut: TypeGenericValueWithError<EntityWithIdAndNameFieldAndParentId>;
  categoryCost: TypeGenericValueWithError<EntityWithIdAndNameFieldAndParentId>;
  subCategoryCost: TypeGenericValueWithError<EntityWithIdAndNameFieldAndParentId>;
  groupProduct: TypeGenericValueWithError<EntityWithIdAndNameFieldAndParentId>;
  hasVariation: TypeGenericValueWithError<HasVariation>;
  nameProduct: TypeGenericValueWithError<string>;
};

type TypeError = {
  isError: boolean;
  descriptionError?: string;
};

type TypeValueAndError = {
  value: string;
  error: TypeError;
};

type TypeDetailsProps = {
  weight: TypeValueAndError;
  width: TypeValueAndError;
  height: TypeValueAndError;
  length: TypeValueAndError;
  descriptionAndDetails: TypeValueAndError;
  technicalSpecification: TypeValueAndError;
  wayOfUse: TypeValueAndError;
};

type TypeStockProps = {
  unitMensured: TypeGenericValueWithError<EntityWithIdAndNameField>;
  stockCurrent: TypeValueAndError;
};

type TypePriceCompositionProps = {
  profit: TypeValueAndError;
  ipi: TypeValueAndError;
  cost: TypeValueAndError;
  dif: TypeValueAndError;
};

type FieldWithIdName = {
  id: string;
  name: string;
};

type TypeHasVariation = {
  unitMensured: TypeGenericValueWithError<FieldWithIdName>;
  currentStock: TypeValueAndError;
  priceCost: TypeValueAndError;
  priceSale: TypeValueAndError;
  variations: TypeGenericValueWithError<FieldWithIdName>[];
};

type ResolverHasVariation = {
  changeUnitMensured: (unitMensured: FieldWithIdName, index: number) => void;
  changeCurrentStock: (stock: string, index: number) => void;
  changePriceSale: (priceSale: string, index: number) => void;
  changePriceCost: (priceCost: string, index: number) => void;
  changeVariations: (variation: string, x: number, y: number) => void;
  addVariations: (variation: FieldWithIdName, x: number, y: number) => void;
  removeVariations: (x: number, y: number) => void;
  addVariation: () => void;
  removeVariation: (index: number) => void;
};

type TypeGetAndSetHasVariation<T> = {
  getData: () => T;
  setData: ResolverHasVariation;
  validate: () => boolean;
};

type TypeProduct = {
  nameProduct: TypeValueAndError;
  amount: TypeValueAndError;
  cost: TypeValueAndError;
  subtotal: TypeValueAndError;
};

type TypeGetAndSetAndValidateAba<T> = {
  getData: () => T;
  setData: (data: T) => void;
  validate: () => boolean;
};

type ResolverComposition = {
  changeInputNameProduct: (name: string, index: number) => void;
  changeInputAmount: (amount: string, index: number) => void;
  changeInputCost: (cost: string, index: number) => void;
  changeInputSubTotal: (subtotal: string, index: number) => void;
  addComposition: () => void;
  removeComposition: (index: number) => void;
};

type TypeGetAndSetComposition<T> = {
  getData: () => T;
  setData: ResolverComposition;
  validate: () => boolean;
};

interface TabCreateContext {
  overview: TypeGetAndSetAndValidateAba<TypeDataOverViewProps>;
  details: TypeGetAndSetAndValidateAba<TypeDetailsProps>;
  stock: TypeGetAndSetAndValidateAba<TypeStockProps>;
  priceComposition: TypeGetAndSetAndValidateAba<TypePriceCompositionProps>;
  composition: TypeGetAndSetComposition<TypeProduct[]>;
  variation: TypeGetAndSetHasVariation<TypeHasVariation[]>;
}

const TabCreateContext = createContext<TabCreateContext>(
  {} as TabCreateContext,
);

const TabCreateProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const error: TypeError = {
    isError: false,
    descriptionError: '',
  };
  const initialStateIdAndNameFieild: TypeGenericValueWithError<EntityWithIdAndNameFieldAndParentId> = {
    error,
    value: {
      id: '',
      name: '',
      parent_id: null,
    },
  };

  const initialStateOverview: TypeDataOverViewProps = {
    categoryCost: initialStateIdAndNameFieild,
    subCategoryCost: initialStateIdAndNameFieild,
    groupProduct: initialStateIdAndNameFieild,
    typeSelectProdut: initialStateIdAndNameFieild,
    hasVariation: {
      error,
      value: { name: '', hasVariation: false },
    },
    nameProduct: { error, value: '' },
  };

  const initialStateDetails: TypeDetailsProps = {
    descriptionAndDetails: { value: '', error },
    height: { value: '', error },
    length: { value: '', error },
    technicalSpecification: { value: '', error },
    wayOfUse: { value: '', error },
    weight: { value: '', error: { isError: false } },
    width: { value: '', error: { isError: false } },
  };

  const initialStateStock: TypeStockProps = {
    stockCurrent: { value: '', error },
    unitMensured: { value: { id: '', name: '' }, error },
  };

  const initialStateComposition: TypeProduct[] = [
    {
      amount: { error, value: '' },
      cost: { error, value: '' },
      nameProduct: { error, value: '' },
      subtotal: { error, value: '' },
    },
  ];

  const initialStatePriceComposition: TypePriceCompositionProps = {
    cost: { error, value: '' },
    dif: { error, value: '' },
    ipi: { error, value: '' },
    profit: { error, value: '' },
  };

  const intialStateHasVariation: TypeHasVariation[] = [
    {
      unitMensured: {
        error,
        value: { id: '', name: '' },
      },
      priceCost: { error, value: '' },
      currentStock: {
        error,
        value: '',
      },
      priceSale: { error, value: '' },
      variations: [{ error, value: { id: '', name: '' } }],
    },
  ];

  const [overView, setOverView] = useState<TypeDataOverViewProps>(
    initialStateOverview,
  );
  const [detail, setDetail] = useState<TypeDetailsProps>(initialStateDetails);
  const [stocks, setStocks] = useState<TypeStockProps>(initialStateStock);
  const [
    priceCompositionState,
    setPriceCompositionState,
  ] = useState<TypePriceCompositionProps>(initialStatePriceComposition);

  const [compositionState, setCompositionState] = useState<TypeProduct[]>(
    initialStateComposition,
  );

  const [variationState, setVariationState] = useState<TypeHasVariation[]>(
    intialStateHasVariation,
  );

  const setDataOverView = (newoverView: TypeDataOverViewProps) => {
    setOverView(newoverView);
  };

  const getDataOverView = (): TypeDataOverViewProps => {
    return overView;
  };

  const validationAndSetErrorAllFieldsDataOverView = useCallback(() => {
    let isError = false;

    return isError;
  }, []);

  const setDetails = (details: TypeDetailsProps) => setDetail(details);

  const getDetails = (): TypeDetailsProps => detail;

  const validationAndSetErrorAllFieldsDetails = useCallback(() => {
    let isError = false;

    if (detail.weight.value === '') {
      isError = true;
      detail.weight.error.isError = true;
      setDetail({ ...detail });
    }
    if (detail.width.value === '') {
      isError = true;
      detail.width.error.isError = true;
      setDetail({ ...detail });
    }
    if (detail.height.value === '') {
      isError = true;
      detail.height.error.isError = true;
      setDetail({ ...detail });
    }
    if (detail.length.value === '') {
      isError = true;
      detail.length.error.isError = true;
      setDetail({ ...detail });
    }
    if (detail.descriptionAndDetails.value === '') {
      isError = true;
      detail.descriptionAndDetails.error.isError = true;
      setDetail({ ...detail });
    }
    if (detail.technicalSpecification.value === '') {
      isError = true;
      detail.technicalSpecification.error.isError = true;
      setDetail({ ...detail });
    }
    if (detail.wayOfUse.value === '') {
      isError = true;
      detail.wayOfUse.error.isError = true;
      setDetail({ ...detail });
    }
    return isError;
  }, [detail]);

  const overview: TypeGetAndSetAndValidateAba<TypeDataOverViewProps> = {
    getData: getDataOverView,
    setData: setDataOverView,
    validate: validationAndSetErrorAllFieldsDataOverView,
  };
  const details: TypeGetAndSetAndValidateAba<TypeDetailsProps> = {
    getData: getDetails,
    setData: setDetails,
    validate: validationAndSetErrorAllFieldsDetails,
  };

  const setStock = (stock: TypeStockProps) => setStocks(stock);

  const getStock = (): TypeStockProps => stocks;

  const validationAndSetErrorAllFieldsStock = () => {
    let isError = false;
    if (stocks.stockCurrent.value === '') {
      isError = true;
      setStocks(old => ({
        ...old,
        stockCurrent: { ...old.stockCurrent, error: { isError: true } },
      }));
    }
    if (stocks.unitMensured.value.id === '') {
      isError = true;
      setStocks(old => ({
        ...old,
        unitMensured: { ...old.unitMensured, error: { isError: true } },
      }));
    }
    return isError;
  };

  const stock: TypeGetAndSetAndValidateAba<TypeStockProps> = {
    setData: setStock,
    getData: getStock,
    validate: validationAndSetErrorAllFieldsStock,
  };

  const getDataPriceComposition = (): TypePriceCompositionProps =>
    priceCompositionState;

  const setDataPriceComposition = (
    priceComposition: TypePriceCompositionProps,
  ) => setPriceCompositionState(priceComposition);

  const validationAndSetErrorAllFieldsPriceComposition = useCallback(() => {
    let isError = false;
    if (priceCompositionState.cost.value === '') {
      isError = true;
      setPriceCompositionState(old => ({
        ...old,
        cost: { ...old.cost, error: { isError: true } },
      }));
    }
    if (priceCompositionState.dif.value === '') {
      isError = true;
      setPriceCompositionState(old => ({
        ...old,
        dif: { ...old.dif, error: { isError: true } },
      }));
    }
    if (priceCompositionState.ipi.value === '') {
      isError = true;
      setPriceCompositionState(old => ({
        ...old,
        ipi: { ...old.ipi, error: { isError: true } },
      }));
    }
    if (priceCompositionState.profit.value === '') {
      isError = true;
      setPriceCompositionState(old => ({
        ...old,
        profit: { ...old.profit, error: { isError: true } },
      }));
    }
    return isError;
  }, [priceCompositionState]);

  const priceComposition: TypeGetAndSetAndValidateAba<TypePriceCompositionProps> = {
    getData: getDataPriceComposition,
    setData: setDataPriceComposition,
    validate: validationAndSetErrorAllFieldsPriceComposition,
  };

  const getDataComposition = (): TypeProduct[] => compositionState;

  const setDataComposition = (): ResolverComposition => {
    const addComposition = () => {
      setCompositionState([...compositionState, initialStateComposition[0]]);
    };

    const removeComposition = (index: number) => {
      const productWithOutIndex = compositionState[index];
      const result = compositionState.filter(
        product => product !== productWithOutIndex,
      );
      if (result.length === 0) {
        setCompositionState(initialStateComposition);
      } else {
        setCompositionState([...result]);
      }
    };

    const changeInputNameProduct = (name: string, index: number) => {
      compositionState[index].nameProduct.value = name;
      compositionState[index].nameProduct.error.isError = false;
      setCompositionState([...compositionState]);
    };

    const changeInputAmount = (amount: string, index: number) => {
      compositionState[index].amount.value = amount;
      compositionState[index].amount.error.isError = false;
      setCompositionState([...compositionState]);
    };

    const changeInputCost = (cost: string, index: number) => {
      compositionState[index].cost.value = cost;
      compositionState[index].cost.error.isError = false;
      setCompositionState([...compositionState]);
    };

    const changeInputSubTotal = (subtotal: string, index: number) => {
      compositionState[index].subtotal.value = subtotal;
      compositionState[index].subtotal.error.isError = false;
      setCompositionState([...compositionState]);
    };

    return {
      addComposition,
      removeComposition,
      changeInputAmount,
      changeInputCost,
      changeInputNameProduct,
      changeInputSubTotal,
    };
  };

  const validationAndSetErrorAllFieldsComposition = () => {
    let isError = false;
    composition.getData().map(({ amount, cost, nameProduct, subtotal }) => {
      if (amount.value === '') {
        isError = true;
        amount.error.isError = true;
      }
      if (cost.value === '') {
        isError = true;
        cost.error.isError = true;
      }
      if (nameProduct.value === '') {
        isError = true;
        nameProduct.error.isError = true;
      }
      if (subtotal.value === '') {
        isError = true;
        subtotal.error.isError = true;
      }
    });
    setCompositionState([...compositionState]);
    return isError;
  };

  const composition: TypeGetAndSetComposition<TypeProduct[]> = {
    getData: getDataComposition,
    setData: setDataComposition(),
    validate: validationAndSetErrorAllFieldsComposition,
  };

  const getDataVariation = (): TypeHasVariation[] => variationState;

  const setDataVariation = (): ResolverHasVariation => {
    const changeUnitMensured = (
      unitMensured: FieldWithIdName,
      index: number,
    ) => {
      variationState[index].unitMensured.value = unitMensured;
      variationState[index].currentStock.error.isError = false;
      setVariationState([...variationState]);
    };

    const changeCurrentStock = (stock: string, index: number) => {
      variationState[index].currentStock.value = stock;
      variationState[index].currentStock.error.isError = false;
      setVariationState([...variationState]);
    };

    const changePriceSale = (priceSale: string, index: number) => {
      variationState[index].priceSale.value = priceSale;
      variationState[index].priceSale.error.isError = false;
      setVariationState([...variationState]);
    };

    const changePriceCost = (priceCost: string, index: number) => {
      variationState[index].priceCost.value = priceCost;
      variationState[index].priceCost.error.isError = false;
      setVariationState([...variationState]);
    };

    const changeVariations = (variation: string, x: number, y: number) => {};

    const addVariations = (
      variation: FieldWithIdName,
      x: number,
      y: number,
    ) => {};
    const removeVariations = (x: number, y: number) => {};

    const removeVariation = (index: number) => {
      const variationWithOutIndex = variationState[index];
      const result = variationState.filter(
        variation => variation !== variationWithOutIndex,
      );
      if (result.length === 0) {
        setVariationState(intialStateHasVariation);
      } else {
        setVariationState([...result]);
      }
    };

    const addVariation = () => {
      setVariationState([...variationState, intialStateHasVariation[0]]);
    };

    return {
      changeUnitMensured,
      changeCurrentStock,
      changePriceSale,
      changePriceCost,
      changeVariations,
      addVariations,
      removeVariations,
      removeVariation,
      addVariation,
    };
  };

  const validationAndSetErrorAllFieldsVariation = () => {
    let isError = false;

    variation
      .getData()
      .map(
        (
          { unitMensured, currentStock, priceSale, priceCost, variations },
          index,
        ) => {
          if (currentStock.value === '') {
            variationState[index].currentStock.error.isError = true;
            setVariationState([
              ...variationState,
              {
                priceCost,
                priceSale,
                unitMensured,
                variations,
                currentStock: { error: { isError: true }, value: '' },
              },
            ]);
            console.log(variationState);

            isError = true;
          }
        },
      );

    setVariationState([...variationState]);

    console.log(variationState);

    return isError;
  };
  useEffect(() => {
    console.log('Overview update');
  }, [overView]);

  const variation: TypeGetAndSetHasVariation<TypeHasVariation[]> = {
    getData: getDataVariation,
    setData: setDataVariation(),
    validate: validationAndSetErrorAllFieldsVariation,
  };

  return (
    <TabCreateContext.Provider
      value={{
        overview,
        details,
        stock,
        priceComposition,
        composition,
        variation,
      }}
    >
      {children}
    </TabCreateContext.Provider>
  );
};

function useTabCreate(): TabCreateContext {
  const context = useContext(TabCreateContext);

  if (!context) {
    throw new Error('useTabCreate must be used witin a TabCreateProvider');
  }

  return context;
}

export { TabCreateProvider, useTabCreate };
