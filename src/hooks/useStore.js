import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

import db from '../db/challengesDB';

const useStore = create(
	persist(
		set => {
			return {
				modalStatus: false,
				modal: {activTyp: '', challengeId: '', idOfActivObject: ''},
				challenges: [...db],
				activeChallengeId: '',
				activities: [],

				setActivChallengeId: challengeId =>
					set(() => {
						return {
							activeChallengeId: challengeId,
						};
					}),

				addActivity: (id, challengeId, date, distance, duration) =>
					id
						? set(state => {
								return {
									activities: state.activities.map(entry =>
										entry.id === id
											? {
													id: entry.id,
													challengeId: entry.challengeId,
													date,
													distance,
													duration,
											  }
											: entry
									),
								};
						  })
						: set(state => {
								return {
									activities: [
										{
											id: nanoid(),
											challengeId,
											date,
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
							activities: state.activities.filter(element => element.id !== id),
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
