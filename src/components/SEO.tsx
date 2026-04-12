import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({
  title,
  description = "Career Na Mimi empowers youth with professional skills development, career mentorship, and job opportunities. Join thousands of young professionals on their journey to success in Tanzania and Africa.",
  keywords,
  canonical,
  ogImage = "https://www.careernamimii.org/hero1.jpeg",
  ogType = "website",
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | Career Na Mimi` 
    : "Career Na Mimi - Empowering Youth Success | Mentorship & Skills";
  
  const siteUrl = "https://www.careernamimii.org";

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      
      {/* Description */}
      <meta name="description" content={description} />
      
      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
