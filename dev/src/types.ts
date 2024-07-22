 export type Section = {
    name: string;
    path: string;
};
export interface ColumnMapping {
    sourceColumn: string;
    targetColumn: string;
    sourceDataType: string;
    targetDataType: string;
}

export interface MappingComponentProps {
    columns: ColumnMapping[];
    onBack: () => void;
    onReset: () => void;
    onMigrate: (mappings: ColumnMapping[]) => void;
    transformationPreviewData: any[];
    messages: string[];
}