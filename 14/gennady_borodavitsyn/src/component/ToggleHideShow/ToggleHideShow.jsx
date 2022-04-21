import { Checkbox } from '../Checkbox/Checkbox';
import styled from 'styled-components';

export const Styles = styled.div`
  margin-bottom: 1rem;
`;

function ToggleHideShow({ getToggleHideAllColumnsProps, allColumns }) {
  return (
    <Styles>
      <div>
        <Checkbox {...getToggleHideAllColumnsProps()} />
        Show/hide all columns
      </div>
      {allColumns.map((column) => (
        <div key={column.id}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            Show/hide "{column.Header}" column
          </label>
        </div>
      ))}
    </Styles>
  );
}

export default ToggleHideShow;
