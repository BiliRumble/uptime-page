import { useI18nStore } from '../stores/i18n';

const { t } = useI18nStore.getState();

/**
 * 格式化数字，保留两位小数
 * @param {number} value - 要格式化的数字
 * @returns {string} - 格式化后的字符串
 */
export const formatNumber = (value: number) => {
	return Math.floor(value * 100) / 100;
};

/**
 * 格式化持续时间，将秒转换为小时、分钟和秒
 * @param {number} seconds - 持续时间（秒）
 * @returns {string} - 格式化后的持续时间字符串
 */
export const formatDuration = (seconds: number) => {
	const h = Math.floor(seconds / 3600);
	const m = Math.floor((seconds % 3600) / 60);
	const s = seconds % 60;

	const parts = [];
	if (h > 0) parts.push(`${h} ${t('common.time.hour')}`);
	if (m > 0) parts.push(`${m} ${t('common.time.minute')}`);
	if (s > 0) parts.push(`${s} ${t('common.time.second')}`);

	return parts.join(' ');
};

/**
 * 把秒数转为 分
 * @param {number} seconds - 持续时间（秒）
 * @returns {string} - 格式化后的持续时间字符串
 */
export const formatDurationToMinute = (seconds: number) => {
	const m = Math.floor(seconds / 60);

	return `${m}m`;
};

/**
 * 格式化时间戳，返回年月日时分秒字符串
 * @param {number} timestamp - 要格式化的时间戳
 * @returns {string} - 格式化后的年月日时分秒字符串
 */
export const formatTimestamp = (timestamp: number) => {
	const date = new Date(timestamp);

	// 获取年、月、日、小时、分钟、秒
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	// 拼接年月日时分秒
	const timeData = {
		year,
		month,
		day,
		hours,
		minutes,
		seconds,
		justTime: `${hours}:${minutes}:${seconds}`,
	};

	return timeData;
};
