import { useMediaQuery } from 'react-responsive';
import { TABLET_MAX_WIDTH, MOBILE_MAX_WIDTH } from '@/constants/deviceSize.js';

export const useDeviceMediaQuery = () => {
  const isDesktop = useMediaQuery({ minWidth: Number(TABLET_MAX_WIDTH) + 1 });
  const isTablet = useMediaQuery({
    minWidth: Number(MOBILE_MAX_WIDTH) + 1,
    maxWidth: Number(TABLET_MAX_WIDTH),
  });
  const isMobile = useMediaQuery({ maxWidth: Number(MOBILE_MAX_WIDTH) });
  return { isDesktop, isTablet, isMobile };
};
