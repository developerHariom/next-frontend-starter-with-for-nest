/* eslint-disable react-hooks/rules-of-hooks */

import { useProductStore } from '@/store/useProductStore'
import React from 'react'

const page = () => {
  const p=useProductStore.getState().products
  console.log(p,"hehe done")

  return (
    <div>
      
    </div>
  )
}

export default page
