const likeSchema = (table) => {
    table.integer('user_id').references('id').inTable('user').notNullable()
    table.integer('post_liked_id').references('id').inTable('posts').notNullable()
    table.timestamps(true, true)
}

module.exports = likeSchema