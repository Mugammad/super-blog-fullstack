/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('user', require('./schemas/user'))
    .createTable('category', require('./schemas/category'))
    .createTable('posts', require('./schemas/posts'))
    .createTable('liked', require('./schemas/likedPosts'))
    .createTable('comments', require('./schemas/comments'))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('comments')
  .dropTableIfExists('liked')
  .dropTableIfExists('posts')
  .dropTableIfExists('category')
  .dropTableIfExists('user')
};
