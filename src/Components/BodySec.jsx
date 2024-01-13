import React from 'react'
import ImgBackground from './ImgBackground'
import Form from './Form'
import Squers from './Squers'

export default function BodySec({query}) {
  return (<>
<ImgBackground/>
<Squers/>
<Form query={query}/>

  </>

  )
}
