import React from 'react';
import { useProduct } from '../../../provider/productProvider';
import { Container } from './style';

type Details = {
  width: number;
  height: number;
  length: number;
  weight: number;
  way_use: string;
  description_details: string;
  technical_specification: string;
};

export const Details = (): JSX.Element => {
  const { getProduct } = useProduct();
  const { details } = getProduct();
  let detail: Details = {} as Details;

  if (details) {
    detail = JSON.parse(details.toLowerCase());
  }

  return (
    <Container>
      <div className="row">
        <div className="form-content col-md-3">
          <label htmlFor="Peso">Peso (kg)</label>
          <p>{detail.weight?.toFixed(3)}</p>
        </div>
        <div className="form-content col-md-3">
          <label htmlFor="tipo do produto">Largura (m)</label>
          <p>{detail.width?.toFixed(2)}</p>
        </div>
        <div className="form-content col-md-3">
          <label htmlFor="tipo do produto">Altura (m)</label>
          <p>{detail.height?.toFixed(2)}</p>
        </div>
        <div className="form-content col-md-3">
          <label htmlFor="tipo do produto">Comprimento (m)</label>
          <p>{detail.length?.toFixed(2)}</p>
        </div>
      </div>
      <hr />
      <div className="text-area row">
        <div className="form-content col-md-12 item">
          <label htmlFor="tipo do produto">Descrição e detalhes</label>
          <textarea defaultValue={detail.description_details} disabled />
        </div>
      </div>
      <div className="text-area row">
        <div className="form-content col-md-12 item">
          <label htmlFor="tipo do produto">Especificação Técnica</label>
          <textarea defaultValue={detail.technical_specification} disabled />
        </div>
      </div>
      <div className="text-area row">
        <div className="form-content col-md-12 item">
          <label htmlFor="tipo do produto">Forma de utilização</label>
          <textarea defaultValue={detail.way_use} disabled />
        </div>
      </div>
    </Container>
  );
};

export const labelDetails = 'Detalhes';
export const nameDetails = '@@tabs-view-details';
