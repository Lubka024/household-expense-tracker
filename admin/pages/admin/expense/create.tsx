import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ExpenseForm } from '../../../components/forms/ExpenseForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create expense
			</SlotSources.Title>
			<CreateScope entity="Expense" redirectOnSuccess="admin/expense/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create expense" labelSaved="Create expense" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/expense/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Expenses
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ExpenseForm />
				</>
			</CreateScope>
		</>
	)
}
