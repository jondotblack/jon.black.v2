import { useEffect, useState } from 'react';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import { GitHubLink, Link } from 'components/link';
import { Weather } from 'components/weather';
import { constants } from 'utils';

const updates = [
  {
    id: 'weather',
    name: <Weather />,
  },
  {
    id: 'mixtape',
    name: (
      <Link href="/mixtape">
        Recently played <strong>v10.22</strong>
      </Link>
    ),
  },
  {
    id: 'blackhill',
    name: (
      <Link href="https://www.exploretock.com/blackhillfarm" isExternal>
        View Black Hill Farm upcoming events
      </Link>
    ),
  },
  {
    id: 'github',
    name: <GitHubLink />,
  },
];

const initialIndex = 0;

const StatusBar = () => {
  const [activeIndex, setActiveIndex] = useState(initialIndex + 1);
  const [activeUpdate, setActiveUpdate] = useState(updates[initialIndex]);
  const { colorMode } = useColorMode();
  const { BG_COLOR_TOKEN } = constants;

  const handleChangeUpdate = () => {
    setActiveIndex(activeIndex >= updates.length - 1 ? initialIndex : activeIndex + 1);
    setActiveUpdate(updates[activeIndex]);
  };

  useEffect(() => {
    if (updates) {
      const interval = setInterval(() => {
        handleChangeUpdate();
      }, 9000);

      return () => clearInterval(interval);
    }
  }, [activeIndex, activeUpdate]);

  return (
    <Box
      layerStyle="statusBar"
      bg={`var(${BG_COLOR_TOKEN})`}
      borderBottom={
        colorMode === 'light'
          ? '1px solid rgba(64, 65, 59, 0.3)'
          : '1px solid rgba(238, 236, 226, 0.4)'
      }
    >
      <Flex
        align="center"
        height="80px"
        justify="flex-end"
        overflow="hidden"
        px="70px"
        textStyle="default"
      >
        <AnimatePresence exitBeforeEnter>
          {activeUpdate?.name && (
            <motion.div
              key={`update_${activeUpdate.id}`}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
              exit={{ y: 80, opacity: 0, transition: { duration: 0.3 } }}
            >
              {activeUpdate.name}
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default StatusBar;
