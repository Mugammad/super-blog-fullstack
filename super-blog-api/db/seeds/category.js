/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {id: 1, name: 'Gaming'},
    {id: 2, name: 'Coding'},
    {id: 3, name: 'Inspirational'}
  ]);
};
