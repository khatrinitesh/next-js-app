import React from 'react';
import './style.css';
import QRCode from 'qrcode.react';

const Example = ({value}) => {
  return (
    <>
      <div className="flex justify-center items-center">
      <QRCode value={value} size={256} />
    </div>
    </>
  )
}

export default Example