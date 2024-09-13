// test.jsx

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import '@mantine/charts/styles.css';

// Sample data for the bar chart
const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

function SimpleBarChart() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="SimpleBarChart" style={{ width: '100%', height: '400px' }}>
        <BarChart
          h={300}
          data={data}
          dataKey="calendar_date"
          series={[
            { name: 'Smartphones' },
            { name: 'Laptops' },
            { name: 'Tablets' },
          ]}
          tickLine="y"
        />
      </div>
    </MantineProvider>
  );
}

export default SimpleBarChart;
