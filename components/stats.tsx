import { LucideProps, Users } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface StatsCardProps {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}

const StatsCard = ({ icon: Icon, title, description }: StatsCardProps) => (
    <div className="bg-[#2f3136] p-6 rounded-lg">
        <Icon className="mx-auto mb-4 h-12 w-12 text-[#7289da]" />
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>{description}</p>
    </div>
);

const Stats = () => {
    return ( 
        <section id="stats" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Bot Statistics</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <StatsCard 
                        icon={Users}
                        title="160+ Servers"
                        description="Furry Bot is active in over 160 Discord servers"
                    />
                    <StatsCard 
                        icon={Users}
                        title="1080+ Users"
                        description="Over 1,080 individual users have installed Furry Bot"
                    />
                </div>
            </div>
        </section>
    );
}
 
export default Stats;