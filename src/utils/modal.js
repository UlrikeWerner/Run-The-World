import AddActivity from '../components/ActivityComponents/Form/index';

export function modalShow(id) {
	const modal = document.querySelector(`#${id}`);
	modal?.showModal();
}

export function modalClose(id) {
	const modal = document.querySelector(`#${id}`);
	modal?.close();
}

export function setModalContent(modalState) {
	if (modalState.activTyp === 'create') {
		return <AddActivity />;
	} else if (modalState.activTyp === 'edit') {
		return <AddActivity inputDistance="" inputDuration="" />;
	}
}
