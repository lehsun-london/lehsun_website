import Image from "next/image";

type MotifBandProps = {
  title: string;
  body: string;
  className?: string;
};

export function MotifBand({ title, body, className = "" }: MotifBandProps) {
  return (
    <section className={`motifBand ${className}`} aria-labelledby="motif-title">
      <Image
        src="/assets/generated/jali-wave.svg"
        alt=""
        fill
        sizes="100vw"
        className="jaliWave"
      />
      <div className="motifBandPanel">
        <h2 id="motif-title">{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
