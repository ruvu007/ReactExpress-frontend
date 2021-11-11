import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const schema = yup.object().shape({
    username: yup.string()
        .email('Vul een geldig emailadres in')
        .required('Vul een geldig emailadres in'),
    password: yup.string()
        .min(8, 'Het wachtwoord moet minimaal 8 tekens bevatten')
        .max(64, 'Het wachtwoord mag maximaal 64 tekens bevatten')
        .required('Vul een wachtwoord in')
        .matches(
            /^(?=.*[a-z])/,
            "Het wachtwoord moet minimaal 1 kleine letter bevatten"
        )
        .matches(
            /^(?=.*[A-Z])/,
            "Het wachtwoord moet minimaal 1 hoofdletter bevatten"
        )
        .matches(
            /^(?=.*[0-9])/,
            "Het wachtwoord moet minimaal 1 nummer bevatten"
        )
        .matches(
            /^(?=.*[!@#$%^&*/])/,
            "Het wachtwoord moet minimaal 1 speciale teken bevatten"
        ),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], 'Wachtwoorden komt niet overeen'),
    name: yup.string()
            .min(1, 'Vul het naam in van uw bedrijf')
            .max(100, 'Het naam van uw bedrijf mag maximaal 100 tekens bevatten')
            .required(),
    zip: yup.string()
            .min(1, 'Vul een geldige postcode in')
            .max(6, 'De postcode van uw bedrijf mag maximaal 6 tekens bevatten')
            .required(),
    housenumber: yup.string()
            .matches(
                /^(?=.*[0-9])/,
                "Het huisnummer moet minimaal 1 nummer bevatten"
            )
            .required(),
    phone: yup.string()
            .matches(/^[0-9\s]+$/, "Letters of speciale leestekens zijn hier niet toegestaan")
            .matches(phoneRegExp, 'Vul een geldig telefoonnummer in')
            .required(),
    kvk: yup.string()
            .min(6, 'Vul een geldig kvk nummer in')
            .max(10, 'Het kvk nummer van uw bedrijf mag maximaal 10 tekens bevatten')
            .matches(/^[0-9\s]+$/, "Letters of speciale leestekens zijn hier niet toegestaan")
            .required(),
    btw: yup.string()
            .min(14, 'Vul een geldig btw nummer in')
            .max(14, 'Het kvk nummer van uw bedrijf mag maximaal 14 tekens bevatten')
            .matches(
                /^(?=.*[NL])/,
                "Vul een geldig btw nummer in"
            )
            .matches(
                /^(?=.*[B])/,
                "Vul een geldig btw nummer in"
            )
            .matches(
                /^(?=.*[0-9])/,
                "Het btw nummer moet minimaal 1 nummer bevatten"
            ),
    bankaccount: yup.string()
            .min(18, 'Het bankrekening nummer moet minimaal 18 tekens bevatten')
            .max(28, 'Het bankrekening nummer mag maximaal 28 tekens bevatten')
            .matches(
                /^(?=.*[NL])/,
                "Vul een geldig bankrekening nummer in"
            )
});