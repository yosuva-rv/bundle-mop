'use client';

// DEMO PR ONLY (do not merge): a default lodash import pulls in the full build.
import _ from 'lodash';
import { useState } from 'react';
import DatePicker from './DatePicker';

export default function DashboardClient() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>{_.startCase('dashboard client')}</h2>
      <DatePicker />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
    </section>
  );
}
