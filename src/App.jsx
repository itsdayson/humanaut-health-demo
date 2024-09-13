// App.jsx

import React, { useState, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import './App.css';
import { sleepObject, sleepValue } from './data/sleep';
import { activityObject, activityValue } from './data/activity';
import { BarChart, AreaChart } from '@mantine/charts';
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';

// Main App component
function App() {
  // Extract the data
  const sleepData = sleepValue(sleepObject);
  const activityData = activityValue(activityObject);

  console.log("Activity Data: ", activityData);
  console.log("Sleep Data: ", sleepData);

  // State for selected dates and filtered data
  const [selectedActivityDate, setSelectedActivityDate] = useState('');
  const [selectedSleepDate, setSelectedSleepDate] = useState('');
  const [filteredActivityData, setFilteredActivityData] = useState({});
  const [filteredSleepData, setFilteredSleepData] = useState({});

  // Populate date options for both activity and sleep data
  const sortedActivityDateOptions = [...new Set(activityData.map(item => item.calendar_date))].sort();
  const sortedSleepDateOptions = [...new Set(sleepData.map(item => item.calendar_date))].sort();

  // Handle activity date selection
  const handleActivityDateChange = (event) => {
    const date = event.target.value;
    setSelectedActivityDate(date);
    const data = activityData.find(item => item.calendar_date === date);
    setFilteredActivityData(data || {});
  };

  // Handle sleep date selection
  const handleSleepDateChange = (event) => {
    const date = event.target.value;
    setSelectedSleepDate(date);
    const data = sleepData.find(item => item.calendar_date === date);
    setFilteredSleepData(data || {});
  };

  useEffect(() => {
    if (sortedActivityDateOptions.length > 0 && !selectedActivityDate) {
      // Set initial date and data for activity only if no date is selected yet
      const initialActivityDate = sortedActivityDateOptions[0];
      setSelectedActivityDate(initialActivityDate);
      setFilteredActivityData(activityData.find(item => item.calendar_date === initialActivityDate) || {});
    }

    if (sortedSleepDateOptions.length > 0 && !selectedSleepDate) {
      // Set initial date and data for sleep only if no date is selected yet
      const initialSleepDate = sortedSleepDateOptions[0];
      setSelectedSleepDate(initialSleepDate);
      setFilteredSleepData(sleepData.find(item => item.calendar_date === initialSleepDate) || {});
    }
  }, [sortedActivityDateOptions, sortedSleepDateOptions, activityData, sleepData, selectedActivityDate, selectedSleepDate]);

  // Transform data for the bar chart
  const chartData = activityData.map(item => ({
    calendar_date: item.calendar_date,
    calories_total: item.calories_total,
    steps: item.steps,
    distance: item.distance,
  }));

  console.log("Chart Data: ", chartData);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <h1>Humanaut Health</h1>

        <div className="dropdown-container">
          <label htmlFor="activity-date-dropdown">Select Activity Date:</label>
          <select
            id="activity-date-dropdown"
            value={selectedActivityDate}
            onChange={handleActivityDateChange}
          >
            {sortedActivityDateOptions.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="activity-data">
          {filteredActivityData.calendar_date && (
            <>
              <h2>Activity Data for {filteredActivityData.calendar_date}</h2>
              <p><strong>Calories Total:</strong> {filteredActivityData.calories_total}</p>
              <p><strong>Steps:</strong> {filteredActivityData.steps}</p>
              <p><strong>Distance:</strong> {filteredActivityData.distance} meters</p>
            </>
          )}
        </div>

        <div className="chart-container" style={{ width: '100%', height: '400px' }}>
          <BarChart
          h={300}
          w={"100%"}
            data={chartData}
            dataKey="calendar_date"
            series={[
              { name: 'calories_total', color: 'violet.6' },
              { name: 'steps', color: 'blue.6' },
              { name: 'distance', color: 'teal.6' },
            ]}
            tickLine="y"
          />
        </div>

        <div className="dropdown-container">
          <label htmlFor="sleep-date-dropdown">Select Sleep Date:</label>
          <select
            id="sleep-date-dropdown"
            value={selectedSleepDate}
            onChange={handleSleepDateChange}
          >
            {sortedSleepDateOptions.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="sleep-data">
          {filteredSleepData.calendar_date && (
            <>
              <h2>Sleep Data for {filteredSleepData.calendar_date}</h2>
              <p><strong>Duration:</strong> {filteredSleepData.duration} seconds</p>
              <p><strong>Total:</strong> {filteredSleepData.total} seconds</p>
              <p><strong>Awake:</strong> {filteredSleepData.awake} seconds</p>
              <p><strong>Light:</strong> {filteredSleepData.light} seconds</p>
              <p><strong>Score:</strong> {filteredSleepData.score}</p>
              <p><strong>Efficiency:</strong> {filteredSleepData.efficiency} %</p>
              <p><strong>Respiratory Rate:</strong> {filteredSleepData.respiratory_rate} bpm</p>
            </>
          )}
        </div>

        <div className="chart-container" style={{ width: '100%', height: '400px' }}>
          <AreaChart
          h={300}
          w={"100%"}
            data={sleepData}
            dataKey="calendar_date"
            series={[
              { name: 'duration', color: 'violet.6' },
              { name: 'total', color: 'blue.6' },
              { name: 'awake', color: 'teal.6' },
              { name: 'light', color: 'green.6' },
            ]}
            tickLine="y"
          />
        </div>

      </div>
    </MantineProvider>
  );
}

export default App;
