export const colors = [
  'primary',
  'secondary',
  'info',
  'error',
  'warn',
  'success',
  'default',
] as const;

export type Color = (typeof colors)[number];
