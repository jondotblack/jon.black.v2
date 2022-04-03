import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { constants } from 'utils';

interface MobileMenuProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const MobileMenu = ({ isOpen, onClose, children }: MobileMenuProps) => {
  const { BG_COLOR_TOKEN } = constants;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'absolute',
            left: 0,
            height: 'calc(100vh - 108px)',
            top: '108px',
            width: '100%',
            zIndex: 9,
          }}
        >
          <Flex
            bg={`var(${BG_COLOR_TOKEN})`}
            direction="column"
            h="100%"
            overflowX="hidden"
            overflowY="auto"
            position="absolute"
            px={4}
            w="100%"
          >
            {children}
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
