'use client';
import React from 'react'
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

const SubmitButton = () => {
    const { pending }=useFormStatus()

  return (
      <Button disabled={pending}>{pending ? "submitting..." : "Submit" }</Button>
  )
}

export default SubmitButton