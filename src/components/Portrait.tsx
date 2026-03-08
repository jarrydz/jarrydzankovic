import Image from 'next/image'

export default function Portrait() {
  return (
    <div className="relative aspect-square w-full max-w-[224px]">
      <Image
        src="/portrait.png"
        alt="Jarryd Zankovic"
        width={1024}
        height={1024}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  )
}
