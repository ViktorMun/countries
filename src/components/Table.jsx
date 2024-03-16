import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  th {
    padding: 10px;
    border-bottom: 1px solid #eeeeeedb;
  }
  td {
    padding: 10px;
    border-bottom: 1px solid #eeeeee3b;
  }
  tr.body{
    &:hover {
      border: 2px solid white;
      color: white;
    }
  }
`;

const Table = ({ data, th, className, onClickRow }) => {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            {th.map((x, index) => (
              <th key={x+index}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="body" onClick={() => onClickRow(item)}  key={index}>
              <td>
                <img
                  className={className}
                  src={item.flags.png}
                  alt={item.name.common}
                />
              </td>
              <td>{item.name.common}</td>
              <td>{item.capital}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
