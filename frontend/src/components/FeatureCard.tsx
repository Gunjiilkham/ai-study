export default function FeatureCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400">{title}</h3>
            <p className="text-gray-300 mt-2">{description}</p>
        </div>
    );
}
