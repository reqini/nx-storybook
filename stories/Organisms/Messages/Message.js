import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { useTranslation } from 'react-i18next'

import MessageComponent from 'Components/Organisms/Messages/message'
import ButtonGeneric from 'Components/Atoms/Buttons/ButtonGeneric'

export default {
  title: '/Organisms/Messages',
  decorators: [withKnobs],
}

export const Message = () => {
  const { t } = useTranslation()

  return (
    <MessageComponent
      title={'Modal ejemplo'}
      image={t('asset.imagePopcorn')}
      textContent={
        'Reunimos o maior acervo de conteúdo, programas de TV, filmes e séries. Tudo o que você gosta em um só lugar'
      }
    >
      <ButtonGeneric title={'Sair'} />
      <ButtonGeneric title={'Cancelar'} />
    </MessageComponent>
  )
}
