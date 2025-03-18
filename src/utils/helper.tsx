import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { I18nNamespaces } from '@/types/i18next';

export const getLocaleProps =
  (namespaces: (keyof I18nNamespaces)[]): GetStaticProps =>
  async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale!, namespaces)),
    },
  });
