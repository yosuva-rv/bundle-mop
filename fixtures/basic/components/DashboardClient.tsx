'use client';

// DEMO PR ONLY (do not merge). Second commit: follow Bundle Mop's suggestion and use a
// named import, which Next rewrites to a per-method import (lodash/startCase).
import { startCase } from 'lodash';
import { useState } from 'react';
import DatePicker from './DatePicker';

export default function DashboardClient() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>{startCase('dashboard client')}</h2>
      <DatePicker />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
    </section>
  );
}
