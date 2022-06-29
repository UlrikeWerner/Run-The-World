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
				addActivity: (id, distance, duration) =>
					id
						? set(state => {
								return {
									activities: state.activities.map(activity =>
										activity.id_ === id
											? {
													id_: activity.id_,
													date: activity.date,
													distance,
													duration,
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
											distance,
											duration,
										},
										...state.activities,
									],
								};
						  }),
				deleteActivity: id => {
					set(state => {
						return {
							activities: state.activities.filter(element => element.id_ !== id),
						};
					});
				},

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
