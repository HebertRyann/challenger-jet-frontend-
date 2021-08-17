import React, { useEffect } from 'react'
import { useTabs } from '../../../../../../../../../hooks/tabs'
import {
  formatProductTypeToLowerCase,
  SALE,
  SEMI_FINISHED
} from '../../../../../domain/data/products'
import { CompositonView } from '../../../domain/response/productResponse'
import { useProduct } from '../../../provider/productProvider'
import { Container } from './style'

export const labelHasComposition = 'Composição'
export const nameHasComposition = '@@tabs-view-has-composition'

export const HasComposition = (): JSX.Element => {
  const { getProduct } = useProduct()
  let compositionList: CompositonView[] = []
  const { activeTab } = useTabs()

  useEffect(() => {
    if (compositionList[0]?.name !== '') {
      if (
        getProduct().type?.replace(' ', '-') ===
          formatProductTypeToLowerCase(SEMI_FINISHED) ||
        getProduct().type?.replace(' ', '-') ===
          formatProductTypeToLowerCase(SALE)
      ) {
        activeTab(nameHasComposition)
      }
    }
  }, [getProduct()])

  const { composition } = getProduct()

  if (composition) {
    compositionList = JSON.parse(composition.toLowerCase())
  }

  const productWithAtributes = () =>
    compositionList?.map(composition => {
      return composition
    })

  productWithAtributes()

  const total = compositionList.reduce(
    (sum, { amount, cost }) => sum + cost * amount,
    0
  )

  return (
    <Container>
      <table className="table table-bordered margin-bottom-0">
        <tbody>
          <tr>
            <th style={{ width: '50%' }}>Produto</th>
            <th>Quantidade</th>
            <th>Custo</th>
            <th>Subtotal</th>
          </tr>
          {compositionList &&
            compositionList.map(({ amount, cost, name, ...rest }) => (
              <tr key={name} className="items">
                <td>{name}</td>
                <td>{amount}</td>
                <td>{cost}</td>
                <td>{(amount * cost).toFixed(2)}</td>
              </tr>
            ))}
          <tr>
            <td className="title" colSpan={3}>
              Total
            </td>
            <td className="value">{total?.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}