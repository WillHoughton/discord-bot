exports.seed = function(knex) {
  return knex('servers').del()
    .then(function () {
      return knex('servers').insert([
        {ref_id: 1, guild_id: 605225205324840970, guild_size: 2, guild_verified: false, guild_name: 'dev', guild_owner: 'WilI#2552', guild_creation_date: '', guild_default_channel: '', guild_icon_url: '', guild_member_count: 2 }
      ]);
    });
};
