import React from 'react';
import { GroupProps, NumberField, TextField } from './types';

export function GroupComponent(props: GroupProps) {
	return (
		<div data-name='group-container'>
			<header data-name='group-header'>
				<span>{props.title}</span>
				{/* button */}
			</header>

			<div data-name='group-inner'>
				{React.Children.map(props.children, (child) => (
					<div data-name='group-field-wrapper'>{child}</div>
				))}
			</div>
		</div>
	);
}

export function TextFieldComponent(props: TextField) {
	const RequiredTextField = () => (
		<input
			data-name='field-input'
			type='text'
			required
			placeholder={props.placeholder}
		/>
	);

	const OptionalTextField = () => (
		<input
			data-name='field-input'
			type='text'
			placeholder={props.placeholder}
		/>
	);

	return (
		<label data-name='field-text'>
			<span data-name='field-label'>{props.label}</span>
			{props.required ? <RequiredTextField /> : <OptionalTextField />}
		</label>
	);
}

export function NumberFieldComponent(props: NumberField) {
	return (
		<label data-name='field-text'>
			<span data-name='field-label'>{props.label}</span>
			<input type='number' />
		</label>
	);
}
