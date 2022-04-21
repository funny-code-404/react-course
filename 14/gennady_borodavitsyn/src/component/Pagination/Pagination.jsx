function Pagination({
  gotoPage,
  previousPage,
  canPreviousPage,
  pageIndex,
  pageOptions,
  nextPage,
  pageCount,
  canNextPage,
}) {
  return (
    <div>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>
    </div>
  );
}

export default Pagination;
