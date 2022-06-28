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
				addActivity: (id, values) =>
					id
						? set(state => {
								console.log('modal', id);
								console.log(values);
								return {
									activities: state.activities.map(activity =>
										activity.id_ === id
											? {
													id_: activity.id_,
													date: activity.date,
													distance: values.distance,
													duration: values.duration,
											  }
											: activity
									),
								};
						  })
						: set(state => {
								return {
									activities: [
										{
											id_: nanoid(),
											date: new Date(),
											distance: values.distance,
											duration: values.duration,
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
