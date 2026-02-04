import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DownloadSection({ title, subtext, file }: { title: string, subtext?: string, file?: string }) {
  return (
    <Button
      variant="outline"
      asChild
      className="wrapper h-auto flex flex-col items-start py-3 px-4 border-2 border-black bg-white hover:bg-white text-black rounded-none transition-all group"
    >
      <Link
        href={`/documents/${file}`}
        download={file}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-2 ">
          <h3 className="text-lg md:text-4xl font-medium">
            {title}
          </h3>
          <ArrowRight className="ml-2 size-8 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        <p className="hidden md:block mt-2 text-smtext-base font-normal">
          {subtext}
        </p>
      </Link>
    </Button>
  )
}