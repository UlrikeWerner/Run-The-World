import {useStore} from '../../../hooks/useStore';

import ModalStateDesign from './styled';

export default function ModalBackdrop({...props}) {
	const modalState = useStore(state => state.modal);
	return <ModalStateDesign {...props} />;
}
