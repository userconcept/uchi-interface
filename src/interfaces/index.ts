export interface IDataSubject {
    id: number;
    text: string;
    active: boolean;
    days: Array<IDataSubjectDay>;
}

export interface IDataSubjectDay {
    id: number;
    day: string;
    date: string;
    active: boolean;
    timeMorning: Array<IDataSubjectTime>;
    timeDay: Array<IDataSubjectTime>;
    timeEvening: Array<IDataSubjectTime>;
}

export interface IDataSubjectTime {
    id: number;
    text: string;
    active: boolean;
}

export interface IButtonsGroup {
    obj: Array<IButtonsGroupItem>;
    change: (id: number) => void;
}

export interface IButtonsGroupItem {
    id: number;
    text: string;
    active: boolean;
}

export interface IButtonsGroupDays {
    obj: Array<IDataSubjectDay>;
    change: (id: number) => void;
}

export interface IButtonsGroupTime {
    obj: Array<IDataSubjectTime>;
    change: (id: number) => void;
    icon: any;
    text: string;
}
