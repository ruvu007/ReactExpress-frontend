import * as yup from 'yup';

export const schema = yup.object().shape({
    username: yup.string().email('Vul een geldig emailadres in').required('Vul een geldig emailadres in'),
    password: yup.string().min(8, 'Het wachtwoord moet minimaal 8 tekens bevatten').max(64, 'Het wachtwoord mag maximaal 64 tekens bevatten').required('Vul een wachtwoord in'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Wachtwoorden komt niet overeen')
});