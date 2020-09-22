import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
//import { useTranslation } from 'react-i18next'

// import Resume from 'Components/Organisms/Resume/Resume'
import Resume from 'Components/2020/Resume/ResumeNew'

const item = {
  category: 'Aventura, Comedy',
  description: 'Para ajudar Dolittle na busca de uma cura para a Rainha, seus amigos animais aparecem.',
  duration: '01:41:32',
  episode: null,
  group_id: '885866',
  href: null,
  imageCard: 'https://assetsnx.clarobrasil.mobi/assets/p16195223_v_h8_ab.jpg?w=290',
  imageFull: 'https://assetsnx.clarobrasil.mobi/assets/p16195223_k_h8_aa.jpg?w=1280',
  provider: false,
  rating: '10',
  season: null,
  title: 'Dolittle',
  year: '2020',
}

export default {
  title: '/Organisms/Resume',
  decorators: [withKnobs],
}

export const ResumeComponent = () => {
  //const { t } = useTranslation()

  return <Resume code={'home'} item={item} />
}
