import styled from 'styled-components';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export const Container = styled.main``;

export const Content = styled.div`
  max-width: 124rem;
  min-height: calc(100vh - 8.4rem);
  padding: 5.6rem 0.8rem;
  margin: 0 auto;

  @media (max-width: 916px) {
    padding-bottom: 20rem;
  }
`;

const formContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const FormContainer = styled(motion.section).attrs({
  variants: formContainerVariants,
  initial: 'hidden',
  animate: 'visible',
})`
  background: ${({ theme }) => theme.colors.background_dark};
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;

  position: relative;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;

  @media (max-width: 916px) {
    height: 20rem;
  }
`;

export const Banner = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
