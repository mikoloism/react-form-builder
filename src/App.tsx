import React from 'react';
import { JsonForm, generateFormFromJson } from './components/component-creator';
import { FieldKind } from './components/types';

export default function App() {
	return (
		<div>
			<h1>Form Builder</h1>
			{generateFormFromJson(jsonForm)}
		</div>
	);
}

const jsonForm: JsonForm = [
	{
		title: 'Title of Group',
		items: [
			{
				kind: FieldKind.Text,
				label: 'Label Of Field',
				placeholder: 'placeholder',
				required: false,
			},
		],
	},
];
