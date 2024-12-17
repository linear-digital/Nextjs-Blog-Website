/* eslint-disable @typescript-eslint/no-explicit-any */
const lottieProvider = (image: any) => {
  return {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

export default lottieProvider;
