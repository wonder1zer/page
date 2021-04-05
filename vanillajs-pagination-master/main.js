const list_items = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
	"Item 9",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')




let current_page = 1;
let rows = 10;


const displayItem = (array, wrapper, rows, current_page) => {
	current_page--;
	let html = ``;
	let start = current_page * rows;
	let end = start + rows;

	let pagination = array.slice(start, end);
	pagination.forEach(e => {
		html += `<div class="item">${e}</div>`;
		wrapper.innerHTML = html;
	});
}
displayItem(list_items, list_element, rows, current_page)


const b = (array, wrapper, rows) => {
	let numberOfPages = Math.ceil(array.length / rows);
	for (let i = 1; i < numberOfPages + 1; i++) {
		let btn = paginationBtn(i)
		wrapper.appendChild(btn);
	}
}

const paginationBtn = (i) => {
	let btn = document.createElement('button');
	btn.innerText = i;
	btn.addEventListener('click', ()=>{
		current_page = i;
		displayItem(list_items, list_element, rows, current_page)
	})
	return btn;
}

b(list_items, pagination_element, rows);
paginationBtn(list_items, list_element, rows, current_page)



prev.addEventListener('click', () => {
	if (current_page != 0) {
		current_page--;
		displayItem(list_items, list_element, rows, current_page)
	}

})

next.addEventListener('click', () => {
	current_page++;
	displayItem(list_items, list_element, rows, current_page)

})