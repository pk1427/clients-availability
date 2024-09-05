export interface Attendee {
    name: string;
    email: string;
}

export interface ScheduledSlot {
    start: Date;
    end: Date;
    attendees: Attendee[];
}

export interface AvailabilitySlot {
    user: string;
    start: Date;
    end: Date;
    duration: number;
    scheduledSlots: ScheduledSlot[];
}

export interface Session {
    user: string;
    start: Date;
    end: Date;
    duration: number;
    scheduledSlots: ScheduledSlot[];
}
