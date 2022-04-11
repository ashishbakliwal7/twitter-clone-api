/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('tweet', (table) => {
      table.increments();
      table.string('tweet').notNullable();
      table.string('created_by').notNullable();
      table.integer('likes').notNullable().defaultTo(0);
      table.integer('parent_tweet').defaultTo(null);
      table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
