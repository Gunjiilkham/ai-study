interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export default function InputField({ label, type, value, onChange, placeholder }: InputFieldProps) {
    return (
        <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-gray-200 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
