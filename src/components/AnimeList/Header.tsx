import Link from "next/link"

interface IHeaderProps {
  title: string,
  linkTitle?: string,
  linkHref?: string
}

export const Header:React.FC<IHeaderProps> = ({
  title,
  linkTitle,
  linkHref
}) => {
  return(
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-color-accent transition-all text-color-primary"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}