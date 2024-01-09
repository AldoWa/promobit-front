import { AspectRatio } from "@chakra-ui/react";

interface TrailerProps {
  src: string;
}

const Trailer: React.FC<TrailerProps> = ({ src }) => {
  return (
    <AspectRatio maxW='907px' ratio={16/9}>
      <iframe
        title='movie trailer'
        src={src}
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default Trailer;
