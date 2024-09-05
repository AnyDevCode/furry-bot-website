import { Search, Heart } from "lucide-react";

const ImageSearchFeature = () => {
    return (
        <div className="bg-[#36393f] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Search className="mr-2" /> Image Search
            </h3>
            <p>Search for furry images using tags with the /image command.</p>
            <div className="mt-4 bg-[#40444b] p-2 rounded">
                <code>/image tags:[your tags here]</code>
            </div>
        </div>
    );
}

const ComingSoonFeature = () => {
    return (
        <div className="bg-[#36393f] p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Heart className="mr-2" /> Coming Soon
            </h3>
            <p>Exciting new features are on the way!</p>
            <ul className="list-disc list-inside mt-2">
                <li>Hug interactions</li>
                <li>More social commands</li>
                <li>And much more!</li>
            </ul>
        </div>
    );
}

const Features = () => {
    return ( 
        <section id="features" className="py-20 bg-[#2f3136]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ImageSearchFeature />
            <ComingSoonFeature />
          </div>
        </div>
      </section>
     );
}
 
export default Features;