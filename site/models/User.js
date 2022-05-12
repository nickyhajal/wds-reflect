class Event {
  constructor({ rsvps = [], likes = [], academy = 0, pre19 = '0' }) {
    this.rsvps = rsvps;
    this.likes = likes;
    this.academy = academy;
    this.pre19 = pre19;
  }

  isAttending(event_id) {
    return this.rsvps.map(v => +v).includes(+event_id);
  }
  isAttendingEvent(event) {
    return this.rsvps.map((v) => +v).includes(+event.event_id) || event.type === 'program';
  }

  hasUnclaimedAcademy() {
    return parseInt(this.pre19, 10) > 0 && parseInt(this.academy, 10) === 0 && false;
  }
}

export default Event;
