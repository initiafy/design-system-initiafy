import { Buttons } from '../models/buttons';

export class ButtonsService {
    public getButtons(design, color): Array<Buttons> {
        let buttons = [
            {
                design: design,
                color: color,
                label: 'Button Label',
                type: 'button',
                disabled: false
            },
            {
                design: design,
                color: color,
                label: 'Button Label',
                type: 'button',
                icon: 'done',
                disabled: false
            },
            {
                design: design,
                color: color,
                type: 'button',
                icon: 'done',
                disabled: false
            },
            {
                design: design,
                color: color,
                label: 'Disable button',
                type: 'button',
                icon: 'done',
                disabled: true
            }
        ]
        return buttons;
    }
}