export const flowRead = (data) => ({
  type: 'FLOW_READ',
  data,
});

export const fanRead = (data) => ({
  type: 'FAN_READ',
  data,
});

export const accelRead = (data) => ({
  type: 'ACCEL_READ',
  data,
});
