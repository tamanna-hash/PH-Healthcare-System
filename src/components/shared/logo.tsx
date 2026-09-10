import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-lg font-bold">PH-Healthcare</h1>
    </div>
  )
}
