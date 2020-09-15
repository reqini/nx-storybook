import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import MessageComponent from 'Components/Organisms/Messages/message'
import ButtonGeneric from 'Components/Atoms/Buttons/ButtonGeneric'

// import ImagePopcorn from 'Components/Atoms/Icons/Messages/net_contenido_alquilado_sin_contenido.svg'

export default {
  title: '/Organisms/Messages',
  decorators: [withKnobs],
}

export const Message = () => {
  return(
    <MessageComponent 
      title={'Modal ejemplo'} 
      // image={ImagePopcorn}
      textContent={'Reunimos o maior acervo de conteúdo, programas de TV, filmes e séries. Tudo o que você gosta em um só lugar'}
    >
      <ButtonGeneric title={'Sair'} />
      <ButtonGeneric title={'Cancelar'} />
    </MessageComponent>
  )
}