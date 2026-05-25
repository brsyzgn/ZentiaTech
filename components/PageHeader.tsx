interface PageHeaderProps {
  title: string;
  description: string;
  dark?: boolean;
  accent?: boolean;
}

export default function PageHeader({
  title,
  description,
  dark = false,
  accent = false,
}: PageHeaderProps) {
  return (
    <header
      className={`relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-12 ${
        dark ? "bg-[#050816] text-white" : "bg-white"
      }`}
    >
      {accent && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(79,70,229,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="pointer-events-none absolute top-1/3 left-0 h-48 w-48 rounded-full bg-indigo-600/10 blur-[80px]" />
        </>
      )}
      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <h1
          className={`max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/65" : "text-soft-navy/80"
          }`}
        >
          {description}
        </p>
      </div>
    </header>
  );
}
