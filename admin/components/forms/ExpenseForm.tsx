import * as React from 'react'
import { Component, DateField, FloatField, SelectField } from '@contember/admin'

export const ExpenseForm = Component(() => <>
	<FloatField field="value" label="Value" />
	<DateField field="date" label="Date" />
	<SelectField field="category" label="Category" options="Category.name" lazy allowNull />
	<SelectField field="user" label="User" options="User.name" lazy allowNull />
</>)
