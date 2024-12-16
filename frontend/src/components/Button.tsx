interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({ text, onClick, disabled }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 rounded text-white font-semibold transition duration-300 disabled:bg-gray-600"
        >
            {text}
        </button>
    );
}
