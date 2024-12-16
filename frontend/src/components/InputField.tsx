interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function InputField({ label, type, value, onChange, placeholder }: InputFieldProps) {
    return (
        <div className="mb-4">
            <label className="block text-gray-300 mb-2">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-teal-500 outline-none text-white"
            />
        </div>
    );
}
