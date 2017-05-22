import moment from 'moment';

class Event {
  constructor({
    event_id = '0',
    year = '2017',
    format = '',
    active = true,
    slug = '',
    lat = '',
    lon = '',
    venue_note = '',
    note = '',
    max = 0,
    num_rsvps = 0,
    free_max = 0,
    num_free = 0,
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
    this.num_rsvps = num_rsvps;
    this.free_max = free_max;
    this.num_free = num_free;
    this.place = place;
    this.address = address;
    this.bios = JSON.parse(bios);
    this.start = start;
    this.end = end;
    this.for_type = for_type;
    this.ignored = ignored;
    this.outline = outline;
    this.descr = descr;
    this.hosts = hosts;
  }

  dateStr() {
    if (this.start.length && this.end.length) {
      return `${moment(this.start)
        .tz('America/Los_Angeles')
        .format(
          'MMMM Do YYYY [from] h:mm a'
        )} until ${moment(this.end)
        .tz('America/Los_Angeles')
        .format('h:mm a')}`;
      // return `${moment(this.start).format('MMMM Do')} - Start time TBD`;
    }
    return '⁛⁛⁛⁛⁛ ⁛⁛⁛⁛ ⁛⁛⁛⁛⁛ ⁛⁛:⁛⁛ ⁛⁛⁛⁛⁛⁛⁛';
  }

  hostnames() {
    const hs = this.hosts;
    const length = hs.length;
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
}

export default Event;
