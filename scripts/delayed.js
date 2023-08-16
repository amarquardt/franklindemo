// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';
import Analytics from './analytics.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
