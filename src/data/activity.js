// activity.js

// Store the given object in a variable
export const activityObject = {
  activity: [
    {
      user_id: 'f74e85fe-948b-4b7f-a04e-89b0b10e256c',
      id: '15ca8801-fec8-4308-b4ea-0734fcd7b646',
      date: '2024-09-08T00:00:00+00:00',
      calendar_date: '2024-09-08',
      calories_total: 1932,
      calories_active: 124,
      steps: 9289,
      daily_movement: 112,
      distance: 112,
      low: 3,
      medium: 1,
      high: 0,
      source: {
        provider: 'oura',
        type: 'ring',
        app_id: null,
        name: 'Oura',
        slug: 'oura',
        logo: 'https://storage.googleapis.com/vital-assets/oura.png',
      },
      floors_climbed: null,
      time_zone: null,
      timezone_offset: null,
      heart_rate: null,
    },
    {
      user_id: 'f74e85fe-948b-4b7f-a04e-89b0b10e256c',
      id: '096ced42-cc0a-48ed-9e87-72cccfd07445',
      date: '2024-09-06T00:00:00+00:00',
      calendar_date: '2024-09-06',
      calories_total: 1062,
      calories_active: 546,
      steps: 7356,
      daily_movement: 127,
      distance: 127,
      low: 3,
      medium: 1,
      high: 0,
      source: {
        provider: 'oura',
        type: 'ring',
        app_id: null,
        name: 'Oura',
        slug: 'oura',
        logo: 'https://storage.googleapis.com/vital-assets/oura.png',
      },
      floors_climbed: null,
      time_zone: null,
      timezone_offset: null,
      heart_rate: null,
    },
    {
      user_id: 'f74e85fe-948b-4b7f-a04e-89b0b10e256c',
      id: '0c8330a1-919c-44ca-a79a-12260559e2bf',
      date: '2024-08-31T00:00:00+00:00',
      calendar_date: '2024-08-31',
      calories_total: 530,
      calories_active: 409,
      steps: 9585,
      daily_movement: 111,
      distance: 111,
      low: 3,
      medium: 1,
      high: 1,
      source: {
        provider: 'oura',
        type: 'ring',
        app_id: null,
        name: 'Oura',
        slug: 'oura',
        logo: 'https://storage.googleapis.com/vital-assets/oura.png',
      },
    },
  ],
};

// Function to extract corresponding value
export function activityValue(data) {
  return data.activity.map((record) => ({
    calendar_date: record.calendar_date,
    calories_total: record.calories_total,
    steps: record.steps,
    distance: record.distance,
  }));
}
