/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('user', (table) => {
      table.increments();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('username').notNullable().unique();
      table.string('password').notNullable();
      table.string('phone').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('bio').notNullable().defaultTo('');
      table.integer('following').notNullable().defaultTo(0);
      table.integer('follower').notNullable().defaultTo(0);
      table.timestamps(true, true);
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
