const likeSchema = (table) => {
    table.increments('id').primary().unique()
    table.integer('user_id').references('id').inTable('user').notNullable()
    table.integer('post_liked_id').references('id').inTable('posts').notNullable()
    table.timestamps(true, true)
}

module.exports = likeSchema