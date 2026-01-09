/**
 * Performance benchmark for react-native-format-currency
 *
 * Run with: npm run benchmark
 */

const {
  formatCurrency,
  clearFormatCache,
  getFormatCacheSize,
} = require("../dist");

const ITERATIONS = 10000;

// Test cases covering different scenarios
const testCases = [
  { amount: 1234.56, code: "USD", description: "USD standard" },
  { amount: 1234567890.12, code: "EUR", description: "EUR large number" },
  { amount: 1234567, code: "JPY", description: "JPY (0 decimals)" },
  { amount: 1234.567, code: "KWD", description: "KWD (3 decimals)" },
  { amount: -999.99, code: "GBP", description: "GBP negative" },
  { amount: 0.01, code: "BRL", description: "BRL small value" },
];

function formatNumber(num) {
  return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function runBenchmark(name, fn, iterations) {
  // Warm up
  for (let i = 0; i < 100; i++) {
    fn();
  }

  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const elapsed = performance.now() - start;
  const opsPerSec = (iterations / elapsed) * 1000;

  return { elapsed, opsPerSec };
}

console.log("=".repeat(60));
console.log("react-native-format-currency Performance Benchmark");
console.log("=".repeat(60));
console.log(`Iterations per test: ${formatNumber(ITERATIONS)}`);
console.log("");

// Benchmark 1: Individual currency formatting (cold cache)
console.log("--- Cold Cache (unique values each iteration) ---");
clearFormatCache();

const coldResults = [];
testCases.forEach(({ amount, code, description }) => {
  clearFormatCache();
  let counter = 0;
  const { elapsed, opsPerSec } = runBenchmark(
    description,
    () => {
      formatCurrency({ amount: amount + counter++ * 0.001, code });
    },
    ITERATIONS,
  );
  coldResults.push({ description, elapsed, opsPerSec });
  console.log(
    `  ${description.padEnd(20)} ${elapsed.toFixed(2).padStart(8)}ms  ${formatNumber(Math.round(opsPerSec)).padStart(10)} ops/sec`,
  );
});

console.log("");

// Benchmark 2: Cached lookups (warm cache)
console.log("--- Warm Cache (same values, cache hits) ---");
clearFormatCache();

// Prime the cache
testCases.forEach(({ amount, code }) => formatCurrency({ amount, code }));
console.log(`  Cache primed with ${getFormatCacheSize()} entries`);
console.log("");

const warmResults = [];
testCases.forEach(({ amount, code, description }) => {
  const { elapsed, opsPerSec } = runBenchmark(
    description,
    () => {
      formatCurrency({ amount, code });
    },
    ITERATIONS,
  );
  warmResults.push({ description, elapsed, opsPerSec });
  console.log(
    `  ${description.padEnd(20)} ${elapsed.toFixed(2).padStart(8)}ms  ${formatNumber(Math.round(opsPerSec)).padStart(10)} ops/sec`,
  );
});

console.log("");

// Benchmark 3: Mixed workload (simulating real app usage)
console.log("--- Mixed Workload (80% cache hits, 20% misses) ---");
clearFormatCache();

const mixedIterations = ITERATIONS * testCases.length;
let cacheHits = 0;
let cacheMisses = 0;

const { elapsed: mixedElapsed, opsPerSec: mixedOps } = runBenchmark(
  "mixed",
  () => {
    if (Math.random() < 0.8) {
      // Cache hit - use one of our test cases
      const tc = testCases[Math.floor(Math.random() * testCases.length)];
      formatCurrency({ amount: tc.amount, code: tc.code });
      cacheHits++;
    } else {
      // Cache miss - unique value
      formatCurrency({ amount: Math.random() * 10000, code: "USD" });
      cacheMisses++;
    }
  },
  mixedIterations,
);

console.log(
  `  Mixed workload:        ${mixedElapsed.toFixed(2).padStart(8)}ms  ${formatNumber(Math.round(mixedOps)).padStart(10)} ops/sec`,
);
console.log(`  Cache size: ${getFormatCacheSize()}`);
console.log("");

// Benchmark 4: Large numbers
console.log("--- Large Numbers Performance ---");
clearFormatCache();

const largeNumberCases = [
  { amount: 1000, description: "1 thousand" },
  { amount: 1000000, description: "1 million" },
  { amount: 1000000000, description: "1 billion" },
  { amount: 1000000000000, description: "1 trillion" },
];

largeNumberCases.forEach(({ amount, description }) => {
  clearFormatCache();
  const { elapsed, opsPerSec } = runBenchmark(
    description,
    () => {
      formatCurrency({ amount, code: "USD" });
    },
    ITERATIONS,
  );
  console.log(
    `  ${description.padEnd(20)} ${elapsed.toFixed(2).padStart(8)}ms  ${formatNumber(Math.round(opsPerSec)).padStart(10)} ops/sec`,
  );
});

console.log("");

// Summary
console.log("=".repeat(60));
console.log("Summary");
console.log("=".repeat(60));

const avgColdOps =
  coldResults.reduce((sum, r) => sum + r.opsPerSec, 0) / coldResults.length;
const avgWarmOps =
  warmResults.reduce((sum, r) => sum + r.opsPerSec, 0) / warmResults.length;
const speedup = avgWarmOps / avgColdOps;

console.log(
  `  Average cold cache:    ${formatNumber(Math.round(avgColdOps))} ops/sec`,
);
console.log(
  `  Average warm cache:    ${formatNumber(Math.round(avgWarmOps))} ops/sec`,
);
console.log(`  Cache speedup:         ${speedup.toFixed(1)}x faster`);
console.log("");

// Performance assertions (optional CI check)
const MIN_OPS_COLD = 500000; // 500k ops/sec minimum
const MIN_OPS_WARM = 2000000; // 2M ops/sec minimum

if (avgColdOps < MIN_OPS_COLD) {
  console.error(
    `WARNING: Cold cache performance (${formatNumber(Math.round(avgColdOps))} ops/sec) below threshold (${formatNumber(MIN_OPS_COLD)} ops/sec)`,
  );
  process.exitCode = 1;
} else if (avgWarmOps < MIN_OPS_WARM) {
  console.error(
    `WARNING: Warm cache performance (${formatNumber(Math.round(avgWarmOps))} ops/sec) below threshold (${formatNumber(MIN_OPS_WARM)} ops/sec)`,
  );
  process.exitCode = 1;
} else {
  console.log("  All performance thresholds passed!");
}

console.log("");
