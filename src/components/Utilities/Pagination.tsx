interface IPageinationProps {
  page: number | string,
  lastPage: number | string,
  setPage: any
}

const Pagination:React.FC<IPageinationProps> = ({
  page,
  lastPage,
  setPage
}) => {
  const handleNextPage = () => {    
    setPage((state: number) => state+1);
    scrollTo({
      behavior: "smooth",
      top: 0
    });
  }
  const handlePrevPage = () => {
    setPage((state: number) => state-1);
    scrollTo({
      behavior: "smooth",
      top: 0
    });
  }

  return(
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {(1 <= 1) ? null : (
        <button className="transition-all hover:text-color-accent" onClick={() => handlePrevPage()}>Prev</button>
      )}
      <p>{page} of {lastPage}</p>
      {2 >= 5 ? null : (
        <button className="transition-all hover:text-color-accent" onClick={() => handleNextPage()}>Next</button>
      )}
    </div>
  )
}

export default Pagination;