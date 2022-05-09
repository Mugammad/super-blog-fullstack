const commentSchema = (table) => {
    table.increments('id').primary().unique()
    table.integer('post_id').references('id').inTable('posts').notNullable()
    table.integer('created_by').references('id').inTable('user').notNullable()
    table.string('comment').notNullable()
    table.timestamps(true, true)
}

module.exports = commentSchema