type TypeActionNameWithTo = {
  name: string
  to: string
  icon: string
}

type PortletTitleCrudType = {
  create: TypeActionNameWithTo
  read: TypeActionNameWithTo
  update: TypeActionNameWithTo
  delete: TypeActionNameWithTo
}

const nameEntity = 'Product'
const nameSource = 'products'
const namePageTitle = 'Produtos'

const nameActionPageMain: TypeActionNameWithTo = {
  name: 'Cadastro',
  to: '/products',
  icon: ''
}

const nameActions: PortletTitleCrudType = {
  create: {
    name: 'Adicionar',
    to: '/form/create/',
    icon: 'fa fa-plus'
  },
  read: {
    name: 'Visualizar',
    to: '/form/',
    icon: 'fa fa-list'
  },
  update: {
    name: 'Atualizar',
    to: '/form/update/',
    icon: 'fa fa-edit'
  },
  delete: {
    name: 'Remover',
    to: '#!',
    icon: 'fa fa-remove'
  }
}

export {
  nameEntity,
  nameSource,
  namePageTitle,
  nameActionPageMain,
  nameActions
}
