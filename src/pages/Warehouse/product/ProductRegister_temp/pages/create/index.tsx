import React from 'react'
import { Tab } from '../../presentation/components/tabs/index'
import { ProductProvider } from '../../presentation/providers/product/ProductProvider'
import Container from '../../../../../../components/Container'
import { breadcrumbCreate } from '../../domain/data/breadcrumb/create'
import { namePageTitle, nameActions } from '../../domain/data/info'
import { TabsProvider } from '../../../../../../hooks/tabs'
import { tabsList } from '../../presentation/components/tabs/tabsList'

const RenderContentTabs = (): JSX.Element => {
  return (
    <TabsProvider>
      <Tab tabList={tabsList} />
    </TabsProvider>
  )
}
export const CreateProductPage = (): JSX.Element => {
  return (
    <ProductProvider>
      <Container
        pageTitle={namePageTitle}
        portletTitle={nameActions.create.name}
        breadcrumb={breadcrumbCreate}
      >
        <RenderContentTabs />
      </Container>
    </ProductProvider>
  )
}