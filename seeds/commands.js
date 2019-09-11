
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('commands').del()
    .then(function () {
      // Inserts seed entries
      return knex('commands').insert([
        {ref_id: 1, command: 'help', response: "\"Help is here!\"", enabled: true},
        {ref_id: 2, command: 'avatar', response: "\"Here's a link to your avatar:\n\" + message.author.displayAvatarURL", enabled: true}
      ]);
    });
};
