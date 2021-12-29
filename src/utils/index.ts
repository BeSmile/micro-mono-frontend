const supportsUserTiming =
  typeof performance !== 'undefined' &&
  typeof performance.mark === 'function' &&
  typeof performance.clearMarks === 'function' &&
  typeof performance.measure === 'function' &&
  typeof performance.clearMeasures === 'function' &&
  typeof performance.getEntriesByName === 'function';

export function performanceGetEntriesByName(markName: string, type?: string) {
  let marks = null;
  if (supportsUserTiming) {
    marks = performance.getEntriesByName(markName, type);
  }
  return marks;
}

export function performanceMark(markName: string) {
  if (supportsUserTiming) {
    performance.mark(markName);
  }
}
