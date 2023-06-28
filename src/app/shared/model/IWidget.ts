import { BaseComponent } from "../components/base/base.component";

export interface IWidget {
    title: string;
    component: BaseComponent | any;
    size: number;
    sequence: number;
};

