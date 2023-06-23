import dayjs from 'dayjs';

export const isValidDate = (date: string): boolean => dayjs(date).isValid();
