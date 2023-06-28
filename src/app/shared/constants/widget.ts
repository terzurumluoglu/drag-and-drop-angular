
import {
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent
} from "src/app/components";

import { IWidget } from "../model";

export const WIDGETS: IWidget[] = [
    {
        title: 'A',
        component: AComponent,
        size: 2,
        sequence: 1,
    },
    {
        title: 'B',
        component: BComponent,
        size: 2,
        sequence: 2,
    },
    {
        title: 'C',
        component: CComponent,
        size: 2,
        sequence: 3
    },
    {
        title: 'D',
        component: DComponent,
        size: 2,
        sequence: 4
    },
    {
        title: 'E',
        component: EComponent,
        size: 2,
        sequence: 5
    },
    {
        title: 'F',
        component: FComponent,
        size: 2,
        sequence: 6
    },
];
