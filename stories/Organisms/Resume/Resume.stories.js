/* eslint-disable import/exports-last */
import React from 'react'

import Resume from 'Components/Organisms/Resume/Resume'

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

const Component = ({ ...args }) => {
  return <Resume code={'home'} item={item} {...args} />
}

export default {
  title: '/Organisms/Resume',
}

export const ResumeComponent = Component.bind({})
ResumeComponent.argTypes = {}
