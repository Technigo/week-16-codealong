import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components/macro'

const Button = styled.button`
  background: yellow;
  display: inline-block;
  border: none;
  padding: 20px;
  width: 70px;
  height: 70px;
  margin: 10px;
  transition: all 0.5s;
  cursor: pointer;
`

const OATLY_CODE = 7394376615979 // If the scanning doesn't work, call fetchProduct with this instead

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <Button type='button' onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
      )}

      {showScanner && (
        <BarcodeScanner
          className='scanner'
          onDetected={code => {
            console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
          }}
        />
      )}
    </>
  )
}
