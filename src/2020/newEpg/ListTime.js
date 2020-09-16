import React from 'react'
import { Grid } from 'react-virtualized'

const CellTime = React.memo(({ result, style }) => {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '16px',
      }}
    >
      {`${result[0]}:${result[1] ? '30' : '00'}`}
    </div>
  )
})

const List = ({ scrollLeft }) => {
  const cellRenderTime = React.useCallback(({ columnIndex, key, style }) => {
    // para que al ser mayor a 48, 96, etc, vuelva a 0
    const index = columnIndex - 48 * parseInt(columnIndex / 48)
    const result = String(index / 2).split('.')

    return <CellTime result={result} style={style} />
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        //background: "#4171B9",
        height: '30px',
      }}
    >
      <div
        // espacio en canales
        style={{
          minWidth: '153px',
          height: '30px',
        }}
      ></div>
      <div>
        <Grid
          style={{ overflow: 'hidden' }}
          scrollLeft={scrollLeft}
          cellRenderer={cellRenderTime}
          columnCount={500}
          columnWidth={180}
          height={30}
          rowCount={1}
          rowHeight={30}
          width={1280}
        />
      </div>
    </div>
  )
}

export default React.memo(List)
