type BadgeProps = {
    children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
    return (
        <span className="font-mono text-accent border border-accent px-2 py-1 text-sm rounded-xl">
            {children}
        </span>
    );
}