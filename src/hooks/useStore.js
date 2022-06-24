import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist(
		set => {
			return {
				activities: [],
				addActivities: (duration, distance) =>
					set(state => {
						return {
							toDos: [
								...state.toDos,
								{
									id_: nanoid(),
									date: new Date(),
									duration,
									distance,
								},
							],
						};
					}),
			};
		},
		{name: 'Run The World'}
	)
);

export {useStore};
