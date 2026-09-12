import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center">
        <Image
          src="/healthcare.svg"
          alt="Logo"
          width={40}
          height={40}
          className="h-20 w-20"
        />
        <h1 className="text-lg font-bold">PH-Healthcare</h1>
    </div>
  )
}
