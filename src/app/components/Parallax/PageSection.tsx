import { motion, useScroll } from "motion/react";
import { useParallax } from "../../../hooks/useParallax";
import { useRef } from "react";

interface SectionProps {
  id: number;
}

export const PageSection = ({ id }: SectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax({ value: scrollYProgress, distance: 300 });

  return (
    <section className="section-container">
      <div ref={ref} className="section-box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in mauris
        consectetur, lobortis ante ut, hendrerit elit. Nam condimentum enim
        dapibus tellus aliquam dignissim. Phasellus dapibus sed ipsum maximus
        pharetra. Curabitur eu eleifend nunc, at aliquet lectus. Suspendisse
        porta, magna vel aliquet iaculis, augue metus vehicula est, quis ornare
        nulla ligula non justo. Etiam pulvinar, dolor nec sagittis hendrerit,
        arcu nisl aliquet erat, ultricies porta ipsum velit vitae diam.
        Curabitur maximus pharetra dictum. Vestibulum a eros eu lectus bibendum
        maximus vel sit amet nisl. Fusce sollicitudin dignissim metus, id
        lobortis urna efficitur eget. Praesent laoreet nisi vel leo pharetra,
        sit amet ornare mauris ullamcorper. Donec convallis magna lacus, non
        scelerisque tortor malesuada nec. Etiam luctus, augue sit amet bibendum
        sodales, eros arcu vehicula dolor, ac pharetra eros lacus at felis.
        Aenean commodo pharetra tempus. Maecenas convallis aliquet pellentesque.
        Morbi et suscipit risus. Mauris sollicitudin, urna vel rutrum luctus,
        augue neque ultrices nisl, a imperdiet nulla dolor vel risus. Phasellus
        pharetra ante eu sollicitudin congue. Sed non tortor congue, tempus
        turpis a, vehicula elit. Integer interdum tempor est, a luctus sem
        pretium in. Nullam commodo pretium neque, quis malesuada erat venenatis
        vitae. Nulla scelerisque mi eu dui ultricies fringilla. Curabitur
        lacinia, tellus a egestas tempor, nisl lectus tincidunt lacus, vitae
        sollicitudin leo enim a eros. Nullam ut lectus finibus, dictum turpis
        at, ultricies est. Vestibulum dictum augue magna, et laoreet nibh congue
        eu. Sed eu nisl rutrum, rhoncus tellus eget, consequat quam. Etiam
        aliquam eros non odio consequat, a accumsan neque elementum. Aenean ac
        nunc odio. Duis consequat mauris arcu, a sagittis enim aliquet pharetra.
        Aliquam metus odio, aliquam et fermentum ultrices, lobortis sed arcu. Ut
        at diam imperdiet, condimentum nulla facilisis, aliquam leo. Proin
        aliquam nibh quis tortor venenatis interdum. In sed magna id risus
        iaculis ornare ac vitae purus. Vestibulum non nulla vel odio sagittis
        fermentum. Morbi at posuere metus. Mauris at elit sit amet lacus rhoncus
        sagittis id ut tellus. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Phasellus suscipit nunc porttitor justo euismod blandit.
        Sed aliquam nunc tellus, in venenatis risus efficitur eget. Aliquam
        velit erat, lobortis nec tortor ac, volutpat volutpat dui. Donec vel
        placerat nibh. Curabitur a congue ex. Curabitur convallis tristique nunc
        at suscipit. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Quisque volutpat, metus sit amet
        malesuada varius, felis mi venenatis nisl, quis scelerisque massa metus
        vitae orci. Cras at nisi nulla. Proin non mattis nunc, eget tempor
        lacus. Praesent nec augue quis ipsum porta fringilla vel vel turpis.
        Nunc varius dui justo, eu sollicitudin mauris porttitor tristique.
        Aliquam semper mattis nulla a feugiat. Phasellus tincidunt nisi elit,
        nec pellentesque arcu mollis et. Nullam mollis tellus vitae suscipit
        lacinia. Phasellus auctor leo quis lacus malesuada, sit amet venenatis
        sapien suscipit. Nunc sodales quis dolor a mattis. Cras venenatis
        vestibulum purus, id porttitor tortor accumsan et. Integer tempor
        suscipit gravida. Aliquam suscipit maximus erat, et ornare leo volutpat
        ac. In vitae lorem vitae nisl posuere finibus. Fusce pulvinar, lectus a
        vestibulum blandit, ex ex posuere ipsum, id congue nibh ipsum id odio.
        Quisque lorem quam, mattis in porttitor at, varius at odio.
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
};
