import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const ContentBlock = (props: Props) => {
  return (
    <div className="main-box">{props.children}</div>
  )
}

export default ContentBlock
