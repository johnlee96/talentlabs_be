/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.raw(`
    insert into manufacturer (id, name)
    values (1, "Lego"), (2, "Disney")
    as new_data
    on duplicate key update
    name=new_data.name;
  `);
};
