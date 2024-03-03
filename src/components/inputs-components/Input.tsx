import React from 'react';

type InputType = "text" | "number" | "password" | "email";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    type: InputType;
}

const InputTSX = React.forwardRef<HTMLInputElement, Props>(
    ({ type, ...rest }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                {...rest}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cian-green-800 focus:border-cian-green-600"
            />
        );
    }
);

export default InputTSX;
