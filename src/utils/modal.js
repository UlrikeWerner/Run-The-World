import EditActivity from '../components/ActivityComponents/EditForm';
import AddActivity from '../components/ActivityComponents/Form/index';

export function setModalContent(modalState) {
	if (modalState.activTyp === 'create') {
		return <AddActivity />;
	} else if (modalState.activTyp === 'edit') {
		return <EditActivity objectId={modalState.idOfActivObject} />;
	}
}
