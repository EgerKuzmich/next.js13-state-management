import dayjs from 'dayjs';

export const DURATION_REGEXP = /(\d+)([dhms | дчмс])/g;

export const parseDuration = (value: string) => {
  const match = value.match(DURATION_REGEXP);

  if (!match) {
    return '';
  }

  const duration = match.reduce((acc, item) => {
    const [_, value, unit] = item.match(/(\d+)([dhms | дчмс])/) ?? [];

    switch (unit) {
      case 'd':
      case 'д':
        return acc.add(Number(value), 'day');
      case 'h':
      case 'ч':
        return acc.add(Number(value), 'hour');
      case 'm':
      case 'м':
        return acc.add(Number(value), 'minute');
      case 's':
      case 'с':
        return acc.add(Number(value), 'second');
      default:
        return acc;
    }
  }, dayjs.duration(0));

  return duration.toISOString();
};
