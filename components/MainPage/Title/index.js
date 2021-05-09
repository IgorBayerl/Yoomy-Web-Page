import React from 'react';

// Style
import {BoxContent} from './styles';

export default function Title({children}) {
  return (
    <BoxContent>
      {children}
      <div className="border" />
    </BoxContent>
  )
}
