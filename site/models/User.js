class Event {
  constructor({ rsvps = [], likes = [], academy = 0, pre17 = '0' }) {
    this.rsvps = rsvps;
    this.likes = likes;
    this.academy = academy;
    this.pre17 = pre17;
  }

  isAttending(event_id) {
    return this.rsvps.includes(event_id);
  }
  isAttendingEvent(event) {
    return this.rsvps.includes(event.event_id) || event.type === 'program';
  }

  hasUnclaimedAcademy() {
    return parseInt(this.pre17, 10) > 0 && parseInt(this.academy, 10) === 0;
  }
}

export default Event;
