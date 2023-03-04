const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leaderboard')
		.setDescription('Outputs the current leaderboard for your league.'),
	async execute(interaction) {
		await interaction.reply('O\'s Before Bros is in the lead!');
	},
};