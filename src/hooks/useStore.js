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
				challengeStatus: [],
				//activeChallengeId: '',
				activities: [],

				/*setActivChallengeId: challengeId =>
					set(() => {
						return {
							activeChallengeId: challengeId,
						};
					}),*/
				setChallengeStatus: (challengeId, status) =>
					challengeId
						? set(state => {
								const newState = {
									...state,
									challengeStatus: state.challengeStatus.map(entry =>
										entry.status === 'active'
											? {
													challengeId: entry.id,
													status: 'paused',
											  }
											: entry
									),
									/*challengeStatus: state.challengeStatus.map(entry =>
										entry.id === challengeId
											? {
													challengeId,
													status: 'active',
											  }
											: entry
									),*/
								};
								return newState;
						  })
						: set(state => {
								return {
									challengeStatus: state.challengeStatus.map(entry =>
										entry.status === 'active'
											? {
													challengeId: entry.id,
													status: 'paused',
											  }
											: entry
									),
									/*challengeStatus: [
										{
											challengeId,
											status,
										},
										...state.challengeStatus,
									],*/
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
