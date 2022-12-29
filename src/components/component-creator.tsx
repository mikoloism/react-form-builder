import {
	GroupComponent,
	NumberFieldComponent,
	TextFieldComponent,
} from './input';
import type { GroupItem } from './types';
import { FieldKind } from './types';

export function generateFormFromJson(json: JsonForm) {
	function mapToField(field: GroupItem) {
		switch (field.kind) {
			case FieldKind.Text:
				return <TextFieldComponent {...field} />;

			case FieldKind.Number:
				return <NumberFieldComponent {...field} />;

			default:
				throw new TypeError(`Can't Find ${field.kind} as Field`);
		}
	}

	function mapToJson(group: Group) {
		return (
			<GroupComponent title={group.title}>
				{group.items.map(mapToField)}
			</GroupComponent>
		);
	}

	return json.map(mapToJson);
}

type Group = { title: string; items: Array<GroupItem> };
export type JsonForm = Array<Group>;
