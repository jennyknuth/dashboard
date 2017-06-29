export const opsTimelyHours = (data) => ({
  type: 'TIMELY',
  data,
});

export const clock = (data) => ({
  type: 'CLOCK',
  data,
});

export const openPositions = (data) => ({
  type: 'OPEN_POSITIONS',
  data,
});

export const applicants = (data) => ({
  type: 'APPLICANTS',
  data,
});

export const employeeCount = (data) => ({
  type: 'EMPLOYEE_COUNT',
  data,
});
