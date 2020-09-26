/* eslint-disable import/exports-last */
import React from 'react'
import { useTranslation } from 'react-i18next'

import { Message as MessageComponent } from 'Components/Organisms/Messages/message'
import { ButtonGeneric } from 'Components/Atoms/Buttons/ButtonGeneric'

const Component = ({ image, ...args }) => {
  const { t } = useTranslation()

  return (
    <MessageComponent image={image || t('asset.imagePopcorn')} {...args}>
      <ButtonGeneric size={'big'} width={200} title={'entendi'} />
    </MessageComponent>
  )
}

export default {
  title: '/Organisms/Messages',
}

export const Message = Component.bind({})
Message.argTypes = {
  title: {
    name: 'titulo',
    description: 'Texto del boton',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'opps!',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'opps!' },
    },
  },
  image: {
    name: 'image',
    description: 'imagen',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
  textContent: {
    name: 'texto',
    description: 'descripcion',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue:
      'Reunimos o maior acervo de conteúdo, programas de TV, filmes e séries. Tudo o que você gosta em um só lugar',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
}
