const postSchema = (table) => {
    table.increments('id').primary().unique()
    table.string('title').notNullable()
    table.integer('category_id').references('id').inTable('category').notNullable()
    table.string('content').notNullable()
    table.string('image').notNullable()
    table.integer('created_by').references('id').inTable('user').notNullable()
    table.timestamps(true, true)
}

module.exports = postSchema