import React, { useState } from 'react';
import Drivers from './Drivers';
import Metric from './Metric';
import { metrics } from './metricData';

export default function MetricCard() {
  const [metric, setMetric] = useState(metrics[0]);
  let metricName = metric['metric'];
  let drivers = metric['drivers'];
  let jsx = (
    <div>
      <div>
        <Metric metric={metricName} />
      </div>
      <div>
        <img src='https://sigma-docs-screenshots.s3.us-west-2.amazonaws.com/Workbooks/Visualizations/Build+a+Bar+Chart/bar-chart.png' />
      </div>
    </div>
  );

  function findMetric(drivers, i) {
    for (let j = 0; j < metrics.length; j++) {
      if (drivers[i] === metrics[j].metric) {
        return j;
      }
    }
  }

  for (let i = 0; i < drivers.length; i++) {
    jsx = (
      <div>
        {jsx}
        <div>
          <button onClick={() => setMetric(metrics[findMetric(drivers, i)])}>{drivers[i]}</button>
        </div>
      </div>
    );
  }

  return <div>{jsx}</div>;
}
