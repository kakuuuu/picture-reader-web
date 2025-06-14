import React from 'react';

const StatisticsSection: React.FC<{
  t: any;
  chartRef: React.RefObject<HTMLDivElement>;
}> = ({ t, chartRef }) => {
  return (
    <div id="compatibility" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('stats.title')}
            </h2>
            <div ref={chartRef} style={{ height: '400px' }}></div>
          </div>
          <div className="z-10 grid grid-cols-2 gap-8 opacity-90">
            {[
              { number: '500+', label: 'Active Users' },
              { number: '100+', label: 'Supported Websites' },
              { number: '4.95/5', label: 'User Rating' },
              { number: '1M+', label: 'Images Processed' },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 p-6 text-center"
              >
                <div className="text-3xl font-bold text-indigo-600">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
