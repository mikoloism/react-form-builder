export type GroupProps = React.PropsWithChildren<{ title: string }>;

export type GroupItem =
	| TextField
	| NumberField
	| RangeField
	| RadioField
	| BinaryField
	| DropdownField;

export interface TextField extends BaseField, FieldByPlaceholder {
	kind: FieldKind.Text;
}

export interface NumberField extends BaseField, FieldByPlaceholder {
	kind: FieldKind.Number;
	minimum?: number /* default = 0 */;
	maximum?: number /* default = Infinity */;
	unit?: string | null /* default = null */;
}

export type RangeField =
	| NormalRangeField
	| IncrementalRangeField
	| StepsRangeField;

export interface NormalRangeField extends BaseRangeField {
	variant: RangeFieldVariant.Normal;
	minimum?: number /* default = 0 */;
	maximum: number;
}

export interface StepsRangeField extends BaseRangeField {
	variant: RangeFieldVariant.Steps;
	steps: number[];
}

export interface IncrementalRangeField extends BaseRangeField {
	variant: RangeFieldVariant.Incremental;
	from?: number /* default = 0 */;
	to?: number /* default = 100 */;
	offset?: number /* default = 1 */;
}

export interface BaseRangeField extends BaseField {
	kind: FieldKind.Range;
	defaultValue?: number /* this.minimum | this.steps[0] */;
}

export interface RadioField extends BaseField, FieldByOption<RadioFieldOption> {
	kind: FieldKind.Radio;
	variant: RadioFieldVariant;
}

export interface RadioFieldOption {
	cover: string | null;
	label: string | null;
}

export enum RadioFieldVariant {
	Grid,
	List,
}

export interface DropdownField
	extends BaseField,
		FieldByPlaceholder,
		FieldByOption<DropdownFieldOption> {
	kind: FieldKind.Dropdown;
}

export interface DropdownFieldOption {
	label: string;
}

export interface BinaryField extends BaseField {
	kind: FieldKind.Binary;
}

export interface BaseField {
	label: string;
	required: boolean;
}

export interface FieldByOption<TOption = any> {
	options: Array<TOption>;
}

export interface FieldByPlaceholder {
	placeholder: string;
}

export enum FieldKind {
	Text,
	Number,
	Range,
	Radio,
	Binary,
	Dropdown,
}

export enum RangeFieldVariant {
	Normal,
	Incremental,
	Steps,
}
