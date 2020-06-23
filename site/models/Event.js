import moment from 'moment';
import 'moment-timezone';

class Event {
  constructor({
    event_id = '0',
    year = '2019',
    format = '',
    active = true,
    slug = '',
    photo = false,
    photo_dims = false,
    lat = '',
    lon = '',
    venue_note = '',
    note = '',
    max = 0,
    num_rsvps = 0,
    free_max = 0,
    num_free = 0,
    price = 0,
    pay_link = '',
    place = '',
    address = '',
    bios = '{}',
    start = '',
    end = '',
    who = '⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛ ⁛⁛⁛⁛⁛⁛⁛⁛ ⁛⁛⁛⁛ ⁛⁛⁛⁛⁛⁛⁛⁛',
    what = '⁛⁛⁛⁛⁛⁛⁛⁛ ⁛⁛⁛⁛⁛⁛⁛⁛ ⁛⁛⁛ ⁛⁛⁛⁛⁛⁛ ⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛⁛',
    type = '',
    hosts = [],
    for_type = '',
    ignored = false,
    outline = '',
    descr = '',
  }) {
    this.event_id = event_id;
    this.who = who;
    this.what = what;
    this.type = type;
    this.year = year;
    this.format = format;
    this.active = active;
    this.slug = slug;
    this.lat = lat;
    this.lon = lon;
    this.venue_note = venue_note;
    this.note = note;
    this.max = max;
    this.price = price;
    this.pay_link = pay_link;
    this.num_rsvps = num_rsvps;
    this.free_max = free_max;
    this.num_free = num_free;
    this.photo = photo;
    this.photo_dims = photo_dims;
    this.place = place;
    this.address = address;
    this.bios = JSON.parse(bios);
    this.start = moment(start).tz('America/Los_Angeles').add('7', 'hours');
    this.end = moment(end).tz('America/Los_Angeles').add('7', 'hours');
    this.for_type = for_type;
    this.ignored = ignored;
    this.outline = outline;
    this.descr = descr;
    this.hosts = hosts;
  }

  dateStr(offset, label) {
    if (this.start.isValid() && this.end) {
      return `${moment(this.start).add(420, 'm').add(offset, 'm').format(
        'MMMM Do YYYY [from] h:mma',
      )} until ${moment(this.end).add(420, 'm').add(offset, 'm').format('h:mma')} ${label}`;
      // return `${moment(this.start).format('MMMM Do')} - Start time TBD`;
    }
    return '⁛⁛⁛⁛⁛ ⁛⁛⁛⁛ ⁛⁛⁛⁛⁛ ⁛⁛:⁛⁛ ⁛⁛⁛⁛⁛⁛⁛';
  }

  startStr(offset, label) {
    if (this.start.isValid()) {
      return `${moment(this.start).add(420, 'm').add(offset, 'm').format('h:mma')}`;
    }
    return '⁛⁛⁛⁛⁛';
  }

  hostnames() {
    const hs = this.hosts;
    const length = hs.length;
    if (this.type === 'program') {
      return 'WDS Main Program';
    }
    return hs
      .map((h, i) => {
        let pre = '';
        if (i) {
          if (i === length - 1) {
            pre = ' & ';
          } else {
            pre = ', ';
          }
        }
        return `${pre}${h.first_name} ${h.last_name}`;
      })
      .join('');
  }

  isPurchase() {
    return this.type === 'academy' || this.price > 0;
  }

  isCancelable() {
    return !this.isPurchase();
  }
}

export default Event;
