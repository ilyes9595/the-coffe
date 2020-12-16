// PROJECT CONFIG
export const PROJECT_NAME='TheCoffe';
export const BASE_URL='localhost:3000/';

// DATA BASE CONFIG
export  const DB_HOST = process.env.DB_HOST || 'localhost';
export  const DB_PORT= process.env.DB_PORT || 27017;
export  const DB_NAME= process.env.DB_NAME || PROJECT_NAME+'-db';

// JWT SECRET
export const JWT_SECRET_KEY ="JWT_SECRET_KEY";
// SMTP
export const SMTP_USER ="SMTP_USER";
export const SMTP_HOST_ADDRESS ="SMTP_HOST_ADDRESS";
export const SMTP_PORT ="SMTP_PORT";
export const SMTP_PASSWORD ="SMTP_PASSWORD";

// MAILER
export const MAILER_CONFIG = {
    transport: {
        host: SMTP_HOST_ADDRESS,
        port: SMTP_PORT,
        secure: false,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD,
        },
    },
    defaults: {
        forceEmbeddedImages: true,
        from: '"nest-modules" <modules@nestjs.com>',
    },
    templateDir: './emails-templates',
    templateOptions: {
        engine: 'handlebars',
    },
};
// DATABASE TOKENS

export const DB_PROVIDER ="DatabaseToken";
export const USER_PROVIDER ="UserToken";
export const COFFE_PROVIDER ="CoffeToken";
export const COMMAND_PROVIDER ="CommandToken";
export const PAIEMENT_PROVIDER ="PaiementToken";

export const PROFILE_PROVIDER ="ProfileProvider";






