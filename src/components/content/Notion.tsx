import { ExtendedRecordMap } from 'notion-types';
import Image from 'next/legacy/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';

import { NotionRenderer } from 'react-notion-x';

interface NotionPageProps {
  content: ExtendedRecordMap;
}

// dynamic imports
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m: any) => m.Code)
);

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m: any) => m.Collection)
);

const NotionPage = ({ content }: NotionPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  if (!content) {
    return null;
  }

  return (
    <NotionRenderer
      recordMap={content}
      fullPage={false}
      darkMode={false}
      components={{
        nextImage: Image,
        nextLink: Link,
        Code,
        Collection,
      }}
    />
  );
};

export default NotionPage;
