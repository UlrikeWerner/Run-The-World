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

				addActivity: (challengeId, id, distance, duration) =>
					id
						? set(state => {
								const challenge = state.challenges.map(
									challenge => challenge.id === challengeId
								);
								return {
									challenges: challenge.activities.map(entry =>
										entry.id_ === id
											? {
													id_: id,
													date: entry.date,
													distance,
													duration,
											  }
											: entry
									),
								};
						  })
						: set(state => {
								const challenge = state.challenges.map(
									challenge => challenge.id === challengeId
								);
								return {
									challenges: (challenge.activities = [
										{
											id_: nanoid(),
											date: new Date(),
											distance,
											duration,
										},
										...challenge.activities,
									]),
								};
						  }),
				deleteActivity: (challengeId, id) => {
					set(state => {
						const challenge = state.challenges.map(
							challenge => challenge.id === challengeId
						);
						return {
							activities: challenge.activities.filter(element => element.id_ !== id),
						};
					});
				},
				setChallengeStatus: (challengeId, status) => {
					set(state => {
						const challenge = state.challenges.map(
							challenge => challenge.id === challengeId
						);
						return {
							status: challenge.activities.filter(element => element.id_ !== id),
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
