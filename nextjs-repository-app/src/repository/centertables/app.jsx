import React from "react";

const CustomApp = () => {
    const tableData = [
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
        { column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
        // Add more data as needed
      ];
  return (
    <>
    
    <h1 className="text-2xl font-bold mb-4">Centered Table Example</h1>
    <CenteredTable data={tableData}/>
    </>
  )
};

export default CustomApp;

const CenteredTable = ({ data }) => {
  return (
    <>
      <div className="flex justify-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Header 1</th>
              <th className="px-4 py-2">Header 2</th>
              <th className="px-4 py-2">Header 3</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row,index) => {
                return(
                    <tr key={index}>
                        <td className="border px-3 py-2">{row.column1}</td>
                        <td className="border px-3 py-2">{row.column2}</td>
                        <td className="border px-3 py-2">{row.column3}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
