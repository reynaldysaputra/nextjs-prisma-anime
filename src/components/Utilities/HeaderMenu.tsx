interface IHeaderMenuProps {
  title: string
}

const HeaderMenu:React.FC<IHeaderMenuProps> = ({
  title
}) => {
  return(
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-primary">{title}</h3>
      </div>
    </div>
  )
}

export default HeaderMenu;