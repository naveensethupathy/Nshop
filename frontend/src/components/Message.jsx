import React from 'react'
import { Alert } from 'react-bootstrap';

const Message = ({varirant,children}) => {
  return (
    <Alert variant={varirant}>
      {children}
    </Alert>
  )
}
Message.defaultProps = {
  variant: 'info',
}
export default Message