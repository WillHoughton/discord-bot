  
exports.up = function (knex, Promise) {
    return knex.schema.createTable('commands', (table) => {
        table.increments('ref_id').primary()
        table.string('command')
        table.string("response")
        table.boolean("enabled")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('commands')
};