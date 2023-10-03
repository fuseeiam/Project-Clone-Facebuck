import { useState } from "react";
import { toast } from 'react-toastify';
import RegisterInput from "./RegisterInput";
import Joi from 'joi';
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth";

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    emailOrMobile: Joi.alternatives([
        Joi.string().email({ tlds: false }),
        Joi.string().pattern(/^[0-9]{10}$/)
    ])
        .required()
        .strip(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required().strip(),
});

const validateRegister = input => { //undefined / {firstName : ... , lastName : ... ,}
    const { error } = registerSchema.validate(input, { abortEarly: false });
    console.dir(error);
    if (error) {

        const result = error.details.reduce((acc, el) => { //{ตัวแรก} เป็น function body , {ตัวที่สอง} เป็น Obj เปล่า
            const { message, path } = el
            acc[el.path[0]] = message;
            return acc; //  อย่าลืม return acc เพราะค่าต่อไปจะเป็น undefined
        }, {});
        return result;
    }
};

export default function RegisterForm() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        emailOrMobile: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        // firstName: 'Initial error',
        // lastName: 'Lastname',
        // emailOrMobile: 'invalid password',
        // password: 'invalid password',
        // confirmPassword: 'sdasfafwev'
    });

    const { register } = useAuth();

    const handdleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // console.log(input);
    };

    const handdleSubmitForm = e => {
        e.preventDefault();
        const validationError = validateRegister(input);
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        register(input).catch(err => {
            toast.error(err.response?.data.message);
        });
    };

    return <form className="grid grid-cols-2 gap-x-3 gap-y-4"
        onSubmit={handdleSubmitForm}
    >
        <div>
            <RegisterInput
                placeholder="First name"
                value={input.firstName}
                onChange={handdleChangeInput}
                name="firstName"
                hasError={error.firstName}
            />
            {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
            <RegisterInput placeholder="Last name"
                value={input.lastName}
                onChange={handdleChangeInput}
                name="lastName"
                hasError={error.lastName}
            />
            {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div className="col-span-full">
            <RegisterInput placeholder="Email address or mobile number"
                value={input.emailOrMobile}
                onChange={handdleChangeInput}
                name="emailOrMobile"
                hasError={error.emailOrMobile}
            />
            {error.emailOrMobile && <InputErrorMessage message={error.emailOrMobile} />}
        </div>
        <div className="col-span-full">
            <RegisterInput placeholder="Password" type="password"
                value={input.password}
                onChange={handdleChangeInput}
                name="password"
                hasError={error.password}
            />
            {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="col-span-full">
            <RegisterInput placeholder="Confirm Password" type="password"
                value={input.confirmPassword}
                onChange={handdleChangeInput}
                name="confirmPassword"
                hasError={error.confirmPassword}
            />
            {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
        </div>
        <div className="mx-auto col-span-full">
            <button className="bg-green-500 rounded-lg text-white px-3 py-1.5 font-bold min-w-[10rem]">
                Sign up
            </button>
        </div>
    </form>
}