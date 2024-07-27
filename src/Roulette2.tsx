interface RouletteProps {
    items: string[];
    spinning: boolean;
}
const Roulette: React.FC<RouletteProps> = ({ items, spinning }) => {
    return (
        <div className={`roulette ${spinning ? 'spinning' : ''}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="roulette-item"
                    style={{
                        transform: `rotate(${(360 / items.length) * index}deg) translateY(-50%)`,
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Roulette;