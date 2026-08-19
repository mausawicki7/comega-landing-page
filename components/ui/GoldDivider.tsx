type GoldDividerProps = {
  withMark?: boolean;
};

export default function GoldDivider({ withMark = false }: GoldDividerProps) {
  if (!withMark) {
    return <hr className="w-full border-t border-comega-gold/25" />;
  }

  return (
    <div className="flex w-full items-center gap-4">
      <hr className="flex-1 border-t border-comega-gold/25" />
      <span className="h-1.5 w-1.5 rotate-45 border border-comega-gold/60" />
      <hr className="flex-1 border-t border-comega-gold/25" />
    </div>
  );
}
