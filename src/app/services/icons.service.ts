import { Icons } from '../models/icons';

export class IconsService {
    public getIcons(icon: string, iconFont: string): Array<Icons> {
        let icons = [
            {
                icon: icon,
                iconFont: iconFont,
                size: 'medium'
            }
        ]
        return icons;
    }
}