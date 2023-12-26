import { dayjs } from 'element-plus';

export const formatTime = (time, layout = 'YYYY年MM月DD日') => dayjs(time).format(layout);