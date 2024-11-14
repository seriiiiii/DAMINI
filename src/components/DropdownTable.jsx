import React, { useState, useMemo } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Arrowdown } from "../assets/images/arrow-down.svg";
// import { ReactComponent as Arrowup } from "../assets/images/arrow-up.svg";

function DropdownTable({ headers, data }) {
  const [expandedRow, setExpandedRow] = useState(null);

  const rowKeys = useMemo(() => {
    if (data && data.length > 0) {
      const firstRow = { ...data[0] };
      delete firstRow.dropDownData;
      return Object.keys(firstRow);
    }
    return [];
  }, [data]);

  const handleRowClick = (index) => {
    setExpandedRow((prevExpandedRow) =>
      prevExpandedRow === index ? null : index
    );
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr onClick={() => handleRowClick(rowIndex)}>
              {rowKeys.map((key) => {
                /*dropdown 행 부분 열에 아이콘 추가*/
                if (key === "requestType" && row.dropDownData) {
                  return (
                    <td key={key} className="dropdown_tr">
                      <Arrowdown
                        className={`arrow-icon ${expandedRow === rowIndex ? "rotated" : ""}`}
                      />
                      {/* <FontAwesomeIcon
                        icon={faArrowDown}
                        style={{ marginRight: "8px", cursor: "pointer" }}
                      /> */}
                      {row[key]}
                    </td>
                  );
                  /* 일반 행 아이콘 추가 */
                } else {
                  return <td key={key}>{row[key]}</td>;
                }

                // if (key === "title" && row[key]) {
                //   return (
                //     <td key={key}>
                //       <Arrowup
                //         style={{ marginRight: "8px", cursor: "pointer" }}
                //       />
                //       {row[key]}
                //     </td>
                //   );
                // }
              })}
            </tr>

            {/* 드롭다운 */}
            {expandedRow === rowIndex &&
              row.dropDownData &&
              row.dropDownData.map((dropDownRow, dropDownRowIndex) => (
                <tr
                  key={dropDownRowIndex}
                  className={
                    dropDownRowIndex === 0
                      ? "dropdown-first"
                      : dropDownRowIndex === 1
                        ? "dropdown-second"
                        : ""
                  }
                >
                  {Object.keys(dropDownRow).map((key, index) => (
                    <td key={index}>{dropDownRow[key]}</td>
                  ))}
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default DropdownTable;
