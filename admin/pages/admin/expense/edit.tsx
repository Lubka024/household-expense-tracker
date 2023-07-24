import * as React from 'react'
import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ExpenseForm } from '../../../components/forms/ExpenseForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit expense
			</SlotSources.Title>
			<EditScope entity="Expense(id=$id)" redirectOnSuccess="admin/expense/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/expense/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ExpenseForm />
			</EditScope>
		</>
	)
}
