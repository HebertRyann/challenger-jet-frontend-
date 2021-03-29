import React, { useCallback, useEffect, useState } from 'react';
import { DropdownInput } from '../../../../../../../../components/DropdownInput';
import { loadCategoryFinance, loadCategoryData } from '../../../services/api';
import { Select } from '../../../../../../../../components/Select';
import { TooltipComponent } from '../../../../../../../../components/TooltipComponent';
import { nameHasVariation } from '../HasVariation';
import { useTabs } from '../../../../../../../../hooks/tabs';
import { nameHasComposition } from '../HasComposition';
import { typeProducts, TypeProduct, SALE, SEMI_FINISHED } from './products';

export const labelDataOverview = 'Dados';
export const nameDataOverview = '@@tabs-overview';

type DataProtocol = {
  id: string;
  name: string;
  parent_id: string | null;
};

export type TypeTabNameEnableOrDisable = {
  keyTab: string;
  name: string;
  active: boolean;
};

const dataHasVariation: TypeTabNameEnableOrDisable[] = [
  {
    keyTab: nameHasVariation,
    name: 'Sim',
    active: true,
  },
  { keyTab: nameHasVariation, name: 'Não', active: false },
];

export const DataOverview = (): JSX.Element => {
  const { activeTab, disableTab } = useTabs();
  const [dataCategoryFinance, setDataCategoryFinance] = useState<
    DataProtocol[]
  >([]);
  const [categoryFinance, setCategoryFinance] = useState('');
  const handlerChangeCategoryFinance = useCallback(
    (value: any) => {
      setCategoryFinance(value);
    },
    [categoryFinance],
  );
  const [dataCategoryCost, setDataCategoryCost] = useState<DataProtocol[]>([]);
  const [categoryProduct, setCategoryProduct] = useState<DataProtocol>();
  const [name, setName] = useState('');
  const [hasVariation, setHasvariation] = useState<TypeTabNameEnableOrDisable>({
    keyTab: '',
    name: 'Selecione',
    active: true,
  });
  const [
    hasComposition,
    setHasComposition,
  ] = useState<TypeTabNameEnableOrDisable>({
    keyTab: '',
    name: 'Selecione',
    active: true,
  });
  const [selectTypeProduct, setSelectTypeProduct] = useState<TypeProduct>({
    id: 0,
    name: 'Selecione',
  });
  const [internalCode, setInternalCode] = useState('');

  const handlerChangeCategoryProduct = useCallback(
    (value: DataProtocol) => {
      setCategoryProduct(value);
      console.log(value.id);
      if (selectTypeProduct.id > 0) {
        console.log('Tipo selecionado');
      } else {
        console.error('NO SELECTED TYPE PRODUCT');
      }
    },
    [categoryProduct, selectTypeProduct],
  );

  const handlerChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.currentTarget.value);
      if (event.target.value === '') {
      }
    },
    [name],
  );

  const handlerHasVariation = useCallback(
    (current: TypeTabNameEnableOrDisable) => {
      if (current.active) {
        activeTab(current.keyTab);
        setHasvariation(current);
      } else {
        disableTab(current.keyTab);
        setHasvariation(current);
      }
    },
    [hasVariation],
  );

  const handlerSelectTypeProduct = useCallback(
    (value: TypeProduct) => {
      setSelectTypeProduct(value);
      if (value === SALE || value === SEMI_FINISHED) {
        activeTab(nameHasComposition);
        setHasComposition({
          active: true,
          keyTab: nameHasComposition,
          name: 'Sim',
        });
      } else {
        disableTab(nameHasComposition);
        setHasComposition({
          active: false,
          keyTab: nameHasComposition,
          name: 'Selecione',
        });
      }
    },
    [selectTypeProduct, hasComposition],
  );

  useEffect(() => {
    async function load() {
      const categoryData = await loadCategoryData();
      setDataCategoryCost(categoryData);
      console.log(categoryData);
      const categoryFinance = await loadCategoryFinance();
      setDataCategoryFinance(categoryFinance);
    }
    load();
  }, []);

  return (
    <>
      <div className="row">
        <div className="form-content col-md-3">
          <TooltipComponent
            label="Tipo de produto"
            message="Selecione o tipo do produto"
          />
          <Select<TypeProduct>
            selectValue={selectTypeProduct}
            onClickItem={handlerSelectTypeProduct}
            data={typeProducts}
          />
        </div>
        <div className="form-content col-md-3">
          <TooltipComponent
            label="Categoria custo"
            message="Selecione o tipo do produto"
          />
          <DropdownInput<DataProtocol>
            className="form-control"
            label=""
            data={dataCategoryFinance}
            onChangeCurrentRow={handlerChangeCategoryFinance}
          />
        </div>
        <div className="form-content col-md-3">
          <TooltipComponent
            label="Grupo produto"
            message="Selecione o tipo do produto"
          />
          <DropdownInput<DataProtocol>
            className="form-control"
            label=""
            data={dataCategoryCost}
            onChangeCurrentRow={handlerChangeCategoryProduct}
          />
        </div>
        <div className="form-content col-md-3">
          <TooltipComponent
            label="Nome do produto"
            message="Selecione o tipo do produto"
          />
          <input
            onChange={handlerChangeName}
            value={name}
            name="category"
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-content col-md-3">
          <TooltipComponent
            label="Possui variação?"
            message="Selecione o tipo do produto"
          />
          <Select<TypeTabNameEnableOrDisable>
            selectValue={hasVariation}
            onClickItem={handlerHasVariation}
            data={dataHasVariation}
          />
        </div>
        <div className="form-content col-md-3">
          <input
            disabled
            value={internalCode}
            name="category"
            type="hidden"
            className="form-control"
          />
        </div>
      </div>
    </>
  );
};