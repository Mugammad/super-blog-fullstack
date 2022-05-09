const userSchema = (table) => {
    table.increments('id').primary().unique()
    table.string('username').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.timestamps(true, true)
}

module.exports = userSchema