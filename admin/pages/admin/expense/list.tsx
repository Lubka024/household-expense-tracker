import * as React from 'react'
import { DataGridScope, DateCell, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Expenses
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/expense/create">
					Create new expense
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Expense" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/expense/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<NumberCell key="value" field="value" header="Value" />
				<DateCell key="date" field="date" header="Date" />
				<HasOneSelectCell field="category" header="category" options="Category.name" />
				<HasOneSelectCell field="user" header="user" options="User.name" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
