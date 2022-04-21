import React, { useEffect, useContext } from 'react';
import { TableContext } from '../../context/TableContext/context';
import { getCars } from '../../ducks/carsReducer';
import { COLUMNS } from './columns.js';

import { getCarsData } from '../../services/api/carsApi';
import { StyledTable } from './styles';

// COMPONENT
import Table from '../Table/Table';

function TableData() {
  const { state, dispatch } = useContext(TableContext);

  useEffect(() => {
    dispatch(getCars(() => getCarsData(), dispatch));
  }, [dispatch]);

  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => state.cars.data, [state.cars.data]);

  return (
    <div>
      <StyledTable>
        {data.length && <Table columns={columns} data={data} />}
      </StyledTable>
    </div>
  );
}

export default TableData;
