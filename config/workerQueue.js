module.exports = {
	kue: {
	  prefix: 'q',
	  redis: {
	    port: 6379,
	    host: 'localhost',
	    auth: '',
	    db: 'hackathon',
	    options: {
	    }
	  },
     disableSearch: true
	}
};
