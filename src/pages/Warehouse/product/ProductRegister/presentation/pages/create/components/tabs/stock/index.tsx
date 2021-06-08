import React from 'react'
import { TooltipComponent } from '../../../../../../../../../../components/TooltipComponent'
import { Container, Th } from './styles'
import { InputForm } from '../../form/input'
import { useFormApplication } from '../../../../../providers/form/FormProvider'

export const StockTab = (): JSX.Element => {
  const { errors, getValues } = useFormApplication()
  const typeProduct = getValues('overview.typeProduct')

  const isSaleOrResale = (): boolean => {
    const productType = typeProduct?.split('+')[1]
    return productType === 'venda' || productType === 'revenda'
  }

  return (
    <Container className="table-responsive">
      <table className="table table-bordered margin-bottom-0">
        <tbody>
          <tr>
            <Th isSale={isSaleOrResale()}>
              <TooltipComponent
                label="Unidade de medidas"
                message="selecione a unidade de medidas"
                bold
              />
            </Th>
            <Th isSale={isSaleOrResale()}>
              <TooltipComponent
                label="Estoque atual"
                message="Informe o estoque atual"
                bold
              />
            </Th>
            <Th isSale={isSaleOrResale()}>
              <TooltipComponent
                label="Reposição de estoque"
                message="Reposição de estoque"
                bold
              />
            </Th>
            {isSaleOrResale() && (
              <th style={{ textAlign: 'center' }} colSpan={2}>
                Preço
              </th>
            )}
          </tr>
          {isSaleOrResale() && (
            <tr>
              <th>Custo</th>
              <th>Venda</th>
            </tr>
          )}

          <tr>
            <td>
              <InputForm
                isNumber
                name={'stock.currentStock'}
                required
                error={errors?.stock?.currentStock}
              />
            </td>
            <td>
              <InputForm
                isNumber
                name={'stock.repositionPoint'}
                required
                error={errors?.stock?.repositionPoint}
              />
            </td>
            <td>
              <InputForm
                isNumber
                name={'stock.thickness'}
                required
                error={errors?.stock?.thickness}
              />
            </td>
            {isSaleOrResale() && (
              <td style={{ width: '150px' }}>
                <InputForm
                  isNumber
                  name={'stock.price.cost'}
                  error={errors?.stock?.price?.cost}
                />
              </td>
            )}
            {isSaleOrResale() && (
              <td style={{ width: '150px' }}>
                <InputForm
                  disabled
                  isNumber
                  name={'stock.price.sale'}
                  error={errors?.stock?.price?.sale}
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
