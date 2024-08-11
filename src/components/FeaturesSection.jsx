import { features } from "../data/features"; // Import features data from external file

export default function FeatureSection() {
    return (
        <>
            {/* Container for the feature section */}
            <div className="flex items-center p-10 justify-center flex-col">
                {/* Section title */}
                <h2 className="font-extrabold text-3xl mb-8 pt-3 text-white">
                    Here is some <span className="text-highlight text-3xl">FEATURES</span>...
                </h2>
                
                {/* Grid layout for features */}
                <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
                    {
                        // Map through the features array and display each feature
                        features.map((feature, index) => (
                            <div 
                                key={index} // Unique key for each feature
                                className="bg-black border border-highlight/30 rounded-lg shadow-lg p-6 h-full flex space-x-4"
                            >
                                {/* Container for feature details */}
                                <div className="flex flex-col">
                                    {/* Feature icon and title */}
                                    <div className="flex flex-row items-center">
                                        <img
                                            src={feature.icon} // Feature icon
                                            alt={feature.name + " icon"} // Alt text for the image
                                            className="h-[50px] pointer-events-none" // Prevent pointer events
                                        />
                                        <h3 className="font-bold text-xl text-white pl-5">{feature.title}</h3>
                                    </div>
                                    {/* Feature description */}
                                    <p className="pt-5 text-white">{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
