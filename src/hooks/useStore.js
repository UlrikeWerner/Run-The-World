import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist(
		set => {
			return {
				activities: [],
				modalStatus: false,
				modal: {activTyp: '', idOfActivObject: ''},
				addActivity: (distance, duration) =>
					set(state => {
						return {
							activities: [
								{
									id_: nanoid(),
									date: new Date(),
									distance,
									duration,
								},
								...state.activities,
							],
						};
					}),
				setModalStatus: status =>
					set(() => {
						return {
							modalStatus: status,
						};
					}),
				setModal: (activTyp, idOfActivObject) =>
					set(() => {
						return {
							modal: {
								activTyp,
								idOfActivObject,
							},
						};
					}),
			};
		},
		{name: 'Run The World'}
	)
);

export {useStore};
