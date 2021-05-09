import { Notify } from 'quasar';

const NotifySucceed = (message) => {
  Notify.create({
    color: 'positive',
    message: message,
    icon: 'eva-checkmark-outline',
  });
};

const NotifyFail = (message) => {
  Notify.create({
    color: 'negative',
    message: message,
    icon: 'eva-alert-circle-outline',
  });
};

export default {
  NotifySucceed,
  NotifyFail,
};
