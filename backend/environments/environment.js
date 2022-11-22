const environment = {
    production: false,
    port: 8080,
    defaultAdminPassword: '5$c3inw%',
    db:{
        host: '127.0.0.1',
        port: 27017,
        username: '',
        password: '',
        authSource: 'admin',
        name: 'intArch'
    },
    corsOrigins: [
        'http://127.0.0.1:4200'
    ]
};

exports.default = environment;
