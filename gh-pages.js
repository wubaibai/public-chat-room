const ghpages = require('gh-pages');

ghpages.publish('build', {
	branch: 'public',
	repo: 'git@github.com:wubaibai/public-chat-room.git',
	user: {
		name: 'Cathy Wu',
		email: 'a304126@gmail.com',
	},
}, (err) => {
	console.log(err);
});
