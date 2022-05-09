const categorySchema = (table) => {
    table.increments('id').primary().unique()
    table.string('name').notNullable()
}

module.exports = categorySchema