import * as yup from 'yup'

export const RegisterFormSchemas = yup.object().shape({

    email: yup.string().email("Please enter a valid email address").required("An email address is required"),

    age: yup.number().positive("Enter a positive value").integer("Enter an integer").required("An age is required"),

    password: yup.string().min(8).max(8).matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase,Lowercase,Number and one special case Character"
    ).required("An password is required"),

    confirmPassword: yup.string().required("An repeat password is required")
        .oneOf([yup.ref('password', yup.password)], 'Password does not match'),

    term: yup.boolean().required("Please check the box")

})