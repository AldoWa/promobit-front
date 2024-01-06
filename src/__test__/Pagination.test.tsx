import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe('Pagination', () => {
  it('Should render the Pagination', () => {
    render(<Pagination
      actualPage={1}
      maxTotalPages={10}
      handlePage={() => {}}
     
    />)

    const paginationStack = screen.getByTestId('pagination-stack');
    const pages = screen.getByTestId('pagination-pages').childNodes;

    expect(paginationStack).toBeInTheDocument();
    expect(pages.length).toBe(5);
    expect(pages[0]).toHaveTextContent('1');
  });

  it('Should render the item to go to the last page and not render the first', () => {
    render(<Pagination
      actualPage={1}
      maxTotalPages={10}
      handlePage={() => {}}
    />)

    const paginationLastPage = screen.queryByTestId('pagination-last-page');
    expect(paginationLastPage).toBeInTheDocument();
    
    const paginationFirstPage = screen.queryByTestId('pagination-first-page');
    expect(paginationFirstPage).not.toBeInTheDocument();
  });

  it('Should render the item to go to the first page and not render the last', () => {
    render(<Pagination
      actualPage={10}
      maxTotalPages={10}
      handlePage={() => {}}
    />)

    const paginationLastPage = screen.queryByTestId('pagination-last-page');
    expect(paginationLastPage).not.toBeInTheDocument();
    
    const paginationFirstPage = screen.queryByTestId('pagination-first-page');
    expect(paginationFirstPage).toBeInTheDocument();
  });

  it('Should render the pagination items correct', () => {
    render(<Pagination
      actualPage={5}
      maxTotalPages={10}
      handlePage={() => {}}
    />)

    const pages = screen.getByTestId('pagination-pages').childNodes;

    expect(pages[0]).toHaveTextContent('3');
    expect(pages[1]).toHaveTextContent('4');
    expect(pages[2]).toHaveTextContent('5');
    expect(pages[3]).toHaveTextContent('6');
    expect(pages[4]).toHaveTextContent('7');
  
  })

  it('Should call handlePage when click on a page', async () => {
    const handlePage = jest.fn();
    
    render(<Pagination
      actualPage={5}
      maxTotalPages={10}
      handlePage={handlePage}
    />)
   
    const pages = screen.getByTestId('pagination-pages').childNodes;

    fireEvent.click(pages[0]);
    await waitFor(() => {
      expect(handlePage).toHaveBeenCalledTimes(1);
    })
  })

  it("Should match snapshot", () => {
    const { container } = render(<Pagination
      actualPage={5}
      maxTotalPages={10}
      handlePage={() => {}}
    />)
    expect(container).toMatchSnapshot();
  });
});