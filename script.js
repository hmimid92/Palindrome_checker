const checkBtn = document.getElementById("check-btn");

const textInput = document.getElementById("text-input");

const Result = document.getElementById("result");

const checkPalindrome = () => {
	if (textInput.value === "") {
		alert("Please input a value");
	}
	const regExp1 = /./gi;
	const regExp = /[a-z0-9]*[^_-\s-,-.-\W]/gi;

	if (textInput.value.length === 1) {
		Result.innerHTML = `${regExp1.exec(textInput.value)} is a palindrome`;
	} else {
		const splittedArr = textInput.value
			.match(regExp)
			.join("")
			.toLowerCase()
			.split("");
		const palindrome = splittedArr.map((el, i) => {
			if (el === splittedArr[splittedArr.length - i - 1]) {
				return true;
			}
		});

		if (palindrome.every((el) => el === true)) {
			Result.innerHTML = `${textInput.value} is a palindrome`;
		} else {
			Result.innerHTML = `${textInput.value} is not a palindrome`;
		}
	}
};

checkBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkPalindrome();
});

textInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		checkPalindrome();
	}
});
