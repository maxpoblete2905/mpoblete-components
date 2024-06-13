import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fc';

export function getReactIconByName(iconName: string): IconType | null {
    if (Object.prototype.hasOwnProperty.call(Icons, iconName)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return Icons[iconName];
    } else {
        console.error(`El icono "${iconName}" no se encontró.`);
        return null;
    }
}
