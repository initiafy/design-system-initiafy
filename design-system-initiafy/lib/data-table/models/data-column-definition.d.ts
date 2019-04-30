import { DataColumnMode } from './data-column-mode';
import { DataColumnCheckboxSettings, DataColumnInputSettings } from './data-column-settings';
export interface DataColumnDefinition<T> {
    title: string;
    columnName: string;
    transformer?: (row: T) => string;
    mode?: DataColumnMode;
    disableFormField?: (row: T) => boolean;
    checkboxSettings?: DataColumnCheckboxSettings<T>;
    inputSettings?: DataColumnInputSettings<T>;
    customHeaderClassLg?: string;
    customCellClassLg?: string;
    customHeaderClassSm?: string;
    customCellClassSm?: string;
    handleCellClick?: (row: T) => void;
    listAccessor?: (row: T) => string[];
}
