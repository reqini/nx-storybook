import React, { useState, useEffect, useCallback } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import get from 'lodash/get'

import CardSeasons from '../Cards/CardSeasons'
import Gradient from '../Gradients/Gradient'

const Ribbon = ({
  id,
  items,
  isSerie,
  sendToPlay,
  snUp,
  snDown,
  snLeft,
  snRight,
  scrollToTop,
  index: indexRibbon,
}) => {
  const [episodeFocus, setEpisodeFocus] = useState(1)

  useEffect(() => {
    setEpisodeFocus(1)
  }, [items])

  const focusHandler = (item) => {
    setEpisodeFocus(parseInt(item.episode))
  }

  const formatDuration = useCallback((duration = '00:00:00') => {
    duration = moment.duration(duration)
    return duration.hours() !== 0 && duration.minutes() === 0
      ? `${duration.hours()}h`
      : duration.hours() && duration.minutes() !== 0
      ? `${duration.hours()}h ${duration.minutes()}min`
      : `${duration.minutes()}min`
  }, [])

  if (!items.length) {
    return null
  }

  return (
    <div>
      <div style={{ marginBottom: 0 }}>
        <div className='wrapScroll' style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {items.map((item, index) => {
              let isLast = index === items.length - 1
              let isFocusable = true
              if (index === 0) {
                isFocusable = true
              }

              return (
                <CardSeasons
                  isActive={parseInt(item.episode) === episodeFocus}
                  snUp={index === 0 ? '' : snUp}
                  snDown={isLast ? '' : snDown}
                  snLeft={snLeft}
                  snRight={snRight}
                  isLast={isLast}
                  scrollToTop={scrollToTop}
                  minHeight={get(item, 'href') ? 120 : 161}
                  indexRibbon={indexRibbon}
                  index={index}
                  isSerie={isSerie}
                  isFocusable={isFocusable}
                  key={`${id}-${index}`}
                  data={item}
                  title={item.title}
                  description={item.description}
                  notDefaultImg={item.provider}
                  // en vcard viene en cover
                  image={item.imageCard || item.cover}
                  novo={false}
                  clickHandler={item.clickHandler}
                  focusHandler={focusHandler}
                  width={260}
                  height={136}
                  bgSize={'280px auto'}
                  sendToPlay={sendToPlay}
                  season={item.season}
                  dubbed={item.dubbed === 'true'}
                  subbed={item.subbed === 'true'}
                  numberSeason={item.episode}
                  durationSeason={formatDuration(item.duration)}
                >
                  <LinearProgress
                    variant='determinate'
                    color='secondary'
                    value={
                      get(item, 'vistime.last.progress', 0) < 95
                        ? get(item, 'vistime.last.progress', 0)
                        : 100
                    }
                  />
                </CardSeasons>
              )
            })}
          </div>
          <Gradient position={'fixed'} height={40} />
        </div>
      </div>
    </div>
  )
}

Ribbon.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      group_id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      provider: PropTypes.string,
      format_types: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  focusHandler: PropTypes.func,
  isSerie: PropTypes.bool,
}

Ribbon.defaultProps = {
  items: [],
  focusHandler: () => {},
  isSerie: false,
}

export default React.memo(Ribbon)
