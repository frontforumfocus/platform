import React, { useState } from 'react';
import { Activity } from '@/convex/prompts';
import Chart from 'chart.js/auto';
import type { ChartConfiguration } from 'chart.js';

const activities = [
  { name: '10 min shower', impacts: ['SDG 6'] },
  { name: '1 hour walk', impacts: ['SDG 3', 'SDG 11'] },
  { name: '1$ donation', impacts: ['SDG 1', 'SDG 2', 'SDG 3', 'SDG 4', 'SDG 5', 'SDG 6', 'SDG 7', 'SDG 8', 'SDG 9', 'SDG 10', 'SDG 11', 'SDG 12', 'SDG 13', 'SDG 14', 'SDG 15', 'SDG 16', 'SDG 17'] },
  { name: 'Recycle', impacts: ['SDG 12'] },
  { name: 'Turn off unused bulbs', impacts: ['SDG 7'] },
  { name: 'Cycle', impacts: ['SDG 3', 'SDG 11'] },
  { name: 'Plant trees', impacts: ['SDG 15'] },
  // Add more activities as needed
];


const Impact: React.FC = () => {
  const [goal, setGoal] =useState(0)
  const [newActivityName, setNewActivityName] = useState('');
  const [newActivityImpacts, setNewActivityImpacts] = useState<string[]>([]);
  const [checkedActivities, setCheckedActivities] = useState<string[]>([]);
  const [goalProgress, setGoalProgress] = useState<{ [name: string]: number }>({});
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleActivityChange = (activityName: string) => {
    setCheckedActivities(prev => prev.includes(activityName) ? prev.filter(name => name !== activityName) : [...prev, activityName]);
  };
  

  const handleAddActivity = () => {
    setActivities(prev => [...prev, { name: newActivityName, impacts: newActivityImpacts }]);
    setNewActivityName('');
    setNewActivityImpacts([]);
  };

  const handleGoalChange = (goalName: string, progress: number) => {
    setGoalProgress(prev => ({ ...prev, [goalName]: progress }));
  };

  const handleActivityClick = (activityName: string) => {
    const activity = activities.find(activity => activity.name === activityName);
    if (activity) {
      setSelectedActivity(activity.impacts.join(', '));
    }
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
                onClick={() => handleActivityClick(activity.name)}
              />
              {activity.name}
            </label>
          </div>
        ))}
      </form>
      <h2>Total Impacts: {totalImpacts.join(', ')}</h2>
      <h2>Selected Activity: {selectedActivity}</h2>
      <form onSubmit={handleAddActivity}>
        <input
          type="text"
          value={newActivityName}
          onChange={e => setNewActivityName(e.target.value)}
        />
        <input
          type="text"
          value={newActivityImpacts.join(', ')}
          onChange={e => setNewActivityImpacts(e.target.value.split(', '))}
        />
        <button type="submit">Add Activity</button>
      </form>
      {activities.map(activity => (
       <div>Goal: {goal}</div>
      ))}
    </div>
  );
};

export default Impact;