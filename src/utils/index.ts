// merge class names with conditional rendering
export function clsx(
	...args: Array<string | false | null | undefined>
): string {
	return args.filter(Boolean).join(" ");
}

export function getReadingTime(text: string) {
	const wordsPerMinute = 200;
	const words = text.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return minutes;
}
