export interface IButtonsGroupItem {
    id: number;
    text: string;
    active: boolean;
}

export interface IButtonsGroup {
    obj: Array<IButtonsGroupItem>;
    change: (id: number) => void;
}

export interface IButtonsGroupDaysItem {
    id: number;
    day: string;
    date: string;
    active: boolean;
}

export interface IButtonsGroupDays {
    obj: Array<IButtonsGroupDaysItem>;
    change: (id: number) => void;
}

export interface IButtonsGroupTimeItem {
    id: number;
    text: string;
    active: boolean;
}

export interface IButtonsGroupTime {
    obj: Array<IButtonsGroupTimeItem>;
    change: (id: number) => void;
    icon: any;
    text: string;
}
