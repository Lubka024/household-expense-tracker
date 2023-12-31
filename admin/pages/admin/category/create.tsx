import * as React from 'react'
import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CategoryForm } from '../../../components/forms/CategoryForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create category
			</SlotSources.Title>
			<CreateScope entity="Category" redirectOnSuccess="admin/category/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create category" labelSaved="Create category" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/category/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Categories
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CategoryForm />
				</>
			</CreateScope>
		</>
	)
}
