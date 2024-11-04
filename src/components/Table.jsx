import React from "react";

function Table({ headers, data }) {
  const rowKeys = React.useMemo(() => {
    return data.length > 0 ? Object.keys(data[0]) : [];
  }, [data]);

  return (
    <table>
      <thead>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {rowKeys.map((rowProperty) => (
              <td key={rowProperty}>{row[rowProperty]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
