import * as React from 'react'
import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { TagsIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<UsersIcon />
			<>
				Users
			</>
		</Stack>}
			to="admin/user/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<>
				Expenses
			</>
		</Stack>}
			to="admin/expense/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
			<TagsIcon />
			<>
				Categories
			</>
		</Stack>}
			to="admin/category/list"
		/>
	</HasRole>
</Menu>)
