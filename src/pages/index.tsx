import 'swiper/css';
import 'swiper/css/pagination';

import * as echarts from 'echarts';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useRef, useState } from 'react';

import DemoSection from '@/components/DemoSection';
import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
// 导入拆分后的组件
import Navigation from '@/components/Navigation';
import StatisticsSection from '@/components/StatisticsSection';
import { Meta } from '@/layout/Meta';
import SupportedWebsites from '@/components/SupportedWebsites';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  const { t, i18n } = useTranslation(['common']);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        title: {
          text: '',
          textStyle: {
            color: '#1a1a1a',
            fontSize: 16,
          },
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [0, 30, 100, 180],
            type: 'line',
            smooth: true,
            color: '#6366f1',
          },
        ],
      };
      chart.setOption(option);
    }
  }, [t]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  const AppConfig = {
    title: t('title'),
    description: t('description'),
    locale: i18n?.language || 'zh-CN',
    site_name: 'Picture Reader',
  };

  return (
    <div className="min-h-screen bg-white">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navigation
        t={t}
        i18n={i18n}
        router={router}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        changeLanguage={changeLanguage}
      />
      <HeroSection t={t} router={router} />
      <FeaturesSection t={t} />
      <DemoSection t={t} router={router} />
      <StatisticsSection t={t} chartRef={chartRef} />
      <SupportedWebsites t={t} />
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default App;
