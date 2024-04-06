import React, { useState } from 'react';

// Define the activities and their impacts
const activities = [
  { name: '10 min shower', impacts: ['SDG 6'] },
  { name: '1 hour walk', impacts: ['SDG 3', 'SDG 11'] },
  { name: '1$ donation', impacts: ['SDG 1', 'SDG 2', 'SDG 3', 'SDG 4', 'SDG 5', 'SDG 6', 'SDG 7', 'SDG 8', 'SDG 9', 'SDG 10', 'SDG 11', 'SDG 12', 'SDG 13', 'SDG 14', 'SDG 15', 'SDG 16', 'SDG 17'] },
  // Add more activities as needed
];

const Impact: React.FC = () => {
  const [checkedActivities, setCheckedActivities] = useState<string[]>([]);

  const handleActivityChange = (activityName: string) => {
    setCheckedActivities(prev => prev.includes(activityName) ? prev.filter(name => name !== activityName) : [...prev, activityName]);
  };

  const totalImpacts = checkedActivities.flatMap(activityName => {
    const activity = activities.find(activity => activity.name === activityName);
    return activity ? activity.impacts : [];
  });

  return (
    <div>
      <h1>Impact on SDGs</h1>
      <form>
        {activities.map(activity => (
          <div key={activity.name}>
            <label>
              <input
                type="checkbox"
                checked={checkedActivities.includes(activity.name)}
                onChange={() => handleActivityChange(activity.name)}
              />
              {activity.name}
            </label>
          </div>
        ))}
      </form>
      <h2>Total Impacts: {totalImpacts.join(', ')}</h2>
    </div>
  );
};

export default Impact;