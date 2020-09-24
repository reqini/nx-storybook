/* eslint-disable import/exports-last */
import React from 'react'
import { useTranslation } from 'react-i18next'

import MessageComponent from 'Components/Organisms/Messages/message'
import ButtonGeneric from 'Components/Atoms/Buttons/ButtonGeneric'

const Component = ({ ...args }) => {
  return <ButtonGeneric {...args} />
}

export default {
  title: '/Organisms/Messages',
}

export const Message = () => {
  const { t } = useTranslation()

  return (
    <MessageComponent
      title={'opps!'}
      image={t('asset.imagePopcorn')}
      textContent={
        'Reunimos o maior acervo de conteúdo, programas de TV, filmes e séries. Tudo o que você gosta em um só lugar'
      }
    >
      <ButtonGeneric size={'big'} width={200} title={'entendi'} />
    </MessageComponent>
  )
}
