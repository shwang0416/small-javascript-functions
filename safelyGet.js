/**
 * 토스 프론트엔드 기출 문제 No More Undefined
 * https://toss.im/career/article/next-developer-2023-sample-questions
 */

function safelyGet(object, path) {
	const pathArray = path.split('.')

	let currentObject = object
	let result

	/**
	 * 주의!
	 * 반복문으로 forEach, map을 쓰면 코드 블록 안에서 리턴했을 때 continue처럼 동작한다
	 * for ... of 나 일반 for문은 리턴하면 기대대로 함수에서 빠져 나와 값을 리턴한다
	 */

	for (const field of pathArray) {
		if (currentObject[field] === undefined) {
			return undefined
		} else {
			currentObject = currentObject[field]
		}
	}

	return result
}
