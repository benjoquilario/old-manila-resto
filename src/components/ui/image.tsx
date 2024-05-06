"use client";

import React, { useCallback, useState } from "react";
import Image, { ImageProps as NextImageProps } from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

interface ImageProps extends NextImageProps {
  containerclassname?: string;
}

const NextImage: React.FC<ImageProps> = ({ onLoad, ...props }) => {
  const { containerclassname } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete: NextImageProps["onLoad"] = useCallback(
    (result: any) => {
      setIsLoaded(true);

      onLoad?.(result);
    },
    [onLoad],
  );

  return (
    <motion.div
      initial="hidden"
      variants={variants}
      animate={isLoaded ? "visible" : "hidden"}
      className={containerclassname}
    >
      <Image onLoad={handleLoadingComplete} unoptimized {...props} />
    </motion.div>
  );
};

export default React.memo(NextImage);
