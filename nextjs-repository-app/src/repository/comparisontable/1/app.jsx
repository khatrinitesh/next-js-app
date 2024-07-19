import React from 'react'

const CustomApp = () => {
  return (
    <>
      <ComparisonTable data={comparisonData}/>
    </>
  )
}

export default CustomApp

// Example data
const comparisonData = [
    {
      name: 'Product A',
      features: {
        Price: '$100',
        Color: 'Red',
        Size: 'Large',
      },
    },
    {
      name: 'Product B',
      features: {
        Price: '$120',
        Color: 'Blue',
        Size: 'Medium',
      },
    },
    {
      name: 'Product C',
      features: {
        Price: '$90',
        Color: 'Green',
        Size: 'Small',
      },
    },
  ];

  const ComparisonTable = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 border text-white">Feature</th>
              {data.map((item, index) => (
                <th key={index} className="px-4 py-2 border text-white">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(data[0].features).map((feature, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{feature}</td>
                {data.map((item, idx) => (
                  <td key={idx} className="border px-4 py-2">
                    {item.features[feature]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

