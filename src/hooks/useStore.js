import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist(
		set => {
			return {
				activities: [],
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
			};
		},
		{name: 'Run The World'}
	)
);

export {useStore};
