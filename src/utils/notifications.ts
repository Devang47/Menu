import { notifications } from '$stores';
import { get } from 'svelte/store';

export const addNotification = (msg: string, error: boolean) => {
	notifications.set([...get(notifications), { message: msg, error }]);

	setTimeout(() => {
		get(notifications).pop();
		notifications.set(get(notifications));
	}, 2000);
};
