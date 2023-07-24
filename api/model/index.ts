import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'

@def.Unique('personId', 'email')
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	expenses = def.oneHasMany(Expense, 'user')
}

@def.Unique('id')
export class Expense {
	id = def.uuidColumn()
	value = def.doubleColumn()
	date = def.dateColumn()
	category = def.manyHasOne(Category, 'expenses')
	user = def.manyHasOne(User, 'expenses')
}

@def.Unique('id')
export class Category {
	id = def.uuidColumn()
	name = def.stringColumn()
	expenses = def.oneHasMany(Expense, 'category')
}
