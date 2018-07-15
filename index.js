const getFirstSelector = (selector) => document.querySelector(selector)

const nestedTarget = (nested, target) => document.querySelector('#nested .target')

const increaseRankBy= (n) => {
	const lis = document.querySelectorAll('.ranked-list')
	for (let i = 0; i < lis.length; i++) {
		lis[i].innerHTML = parseInt(lis[i].innerHTML) + 1;
	}	
}

const deepestChild = () => {
	let divs = document.querySelector('#grand-node').querySelectorAll('div');
	
	for (let i = 0; i < divs.length; i++) {
		if (divs[i].querySelector('div') === null) {
			return divs[i];
		}
	}
}