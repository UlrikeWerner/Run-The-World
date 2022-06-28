export function modalShow(id) {
	const modal = document.querySelector(`#${id}`);
	modal?.showModal();
}

export function modalClose(id) {
	const modal = document.querySelector(`#${id}`);
	modal?.close();
}

export function setModalContent() {
	return <p>empty</p>;
}
