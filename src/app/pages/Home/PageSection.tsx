interface SectionProps {
  id: number;
}

export const PageSection = ({ id }: SectionProps) => {
  return (
    <section className="section-container">
      <div>Section #{id}</div>
      <h2>{`#00${id}`}</h2>
    </section>
  );
};
