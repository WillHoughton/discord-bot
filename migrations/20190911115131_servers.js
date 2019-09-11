  
exports.up = function (knex, Promise) {
    return knex.schema.createTable('servers', (table) => {
        table.increments('ref_id').primary()
        table.integer('guild_id')
        table.boolean('guild_size')
        table.boolean('guild_verified')
        table.string('guild_name')
        table.string('guild_owner')
        table.string('guild_creation_date')
        table.string('guild_default_channel')
        table.string('guild_icon_url')
        table.integer('guild_member_count')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('servers')
};