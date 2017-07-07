const types = {
  meetup: {
    id: 'meetup',
    single: 'Meetup',
    plural: 'Meetups',
    noun: 'A meetup',
    headerPosition: 'center center',
  },
  academy: {
    id: 'academy',
    single: 'Academy',
    plural: 'Academies',
    noun: 'An academy',
    headerPosition: 'center center',
  },
  expedition: {
    id: 'expedition',
    single: 'Expedition',
    plural: 'Expeditions',
    noun: 'An expedition',
    headerPosition: 'center top',
  },
  registration: {
    id: 'registration',
    single: 'Registration',
    plural: 'Registration',
    noun: 'A registration session',
    headerPosition: 'center top',
  },
  activity: {
    id: 'activity',
    plural: 'Activities',
    single: 'Activity',
    noun: 'An activity',
    headerPosition: 'center center',
  },
};
const map = {
  byId: types,
  byPlural: {
    meetups: types.meetup,
    academies: types.academy,
    expeditions: types.expedition,
    activities: types.activity,
    registration: types.registration,
  },
};

export default map;
