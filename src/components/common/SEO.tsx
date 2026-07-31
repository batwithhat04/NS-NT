import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONFERENCE_INFO } from '../../config/conferenceData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = `${CONFERENCE_INFO.fullTitle} (${CONFERENCE_INFO.acronym}) organized by ${CONFERENCE_INFO.organizer.primary} in collaboration with KCET Amritsar, NIT Uttarakhand, and CSIR-NPL on ${CONFERENCE_INFO.dates.display}.`,
  keywords = 'NS&NT 2026, NIT Delhi, Nanoscience, Nanotechnology, Conference, CSIR-NPL, Nanomaterials, Research, Delhi Event'
}) => {
  const fullTitle = title
    ? `${title} | ${CONFERENCE_INFO.acronym} - NIT Delhi`
    : `${CONFERENCE_INFO.acronym} | 1st International Conference on Nanoscience and Advanced Nanotechnology | NIT Delhi`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${CONFERENCE_INFO.acronym} - NIT Delhi`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
