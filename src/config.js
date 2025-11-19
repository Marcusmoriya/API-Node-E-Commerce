global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef'
global.EMAIL_TMPL ='Olá <strong>{0}</strong> seja bem vindo ao Node Store'

module.exports = {
    connectionString: 'mongodb+srv://moriyamarcus920_db_user:Marcus@ndstore.9aueay7.mongodb.net/?appName=ndstore',
    sendgridKey: process.env.SENDGRID_API_KEY,
    containerConnectionString: 'TBD'
}