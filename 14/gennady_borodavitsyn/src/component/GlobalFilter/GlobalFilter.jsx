import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import styled from 'styled-components';

export const StyledGlobalFilter = styled.div`
  margin-bottom: 1rem;
`;

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <StyledGlobalFilter>
      Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '1',
        }}
      />
    </StyledGlobalFilter>
  );
}

export default GlobalFilter;
